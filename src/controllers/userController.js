import chalk from "chalk";
import { registrationMail } from "../config/mail.js";
import userModel from "../models/userModel.js";
import { hashPassword, verifyPassword } from "../services/hash.js";
import { signJWT } from "../services/jwt.js";

export const signup = async (req, res) => {
  try {
    //no validation yet-- needed validation
    let payload = req.body;
    const header = req.headers;
    console.log("header", header);
    const hashPass = await hashPassword(payload.password);
    payload = { ...payload, password: hashPass };
    const user = await userModel.create(payload);
    const token = await signJWT({ id: user?._id });
    await registrationMail({
      email: user?.email,
      name: user?.username,
      url: "https://yopmail.com/en/wm", //add verification url
      platform: header.platform,
      otp: user?.otp,
    });
    res.status(200).send({
      success: true,
      msg: "success",
      data: { token, _id: user?._id, email: user?.email },
    });
  } catch (error) {
    console.log(chalk.bgRed.bold(error?.message));
    res.status(200).send(error?.message);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(403).send("Email Id or Password missing");
    } else {
      const check = await userModel.find({ email }).select("password");
      if (check?.length) {
        const passCheck = await verifyPassword(password, check?.[0]?.password);
        if (passCheck) {
          const token = await signJWT({ id: check?.[0]?._id });
          return res.status(200).send({
            success: true,
            msg: "sccuess",
            token: token,
          });
        } else {
          return res.status(422).send("Email Id or Password not matched!");
        }
      } else {
        return res.status(422).send("Email Id or Password not matched!");
      }
    }
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
    res.status(500).send(error?.message);
  }
};
export const verifyUserOtp = async (req, res) => {
  try {
    const { otp, id } = req.body;
    if (!otp || !id) {
      return res.status(403).send("OTP or user-id is missing");
    } else {
      const findUser = await userModel.find({ _id: id });
      if (findUser?.length) {
        await userModel.updateOne({ _id: id }, { isActive: true });
        const token = await signJWT({ id: findUser?.[0]?._id });
        return res.status(200).send({
          success: true,
          msg: "sccuess",
          token: token,
        });
      } else {
        return res.status(422).send("Email Id or Password not matched!");
      }
    }
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
    res.status(500).send(error?.message);
  }
};

export const getUser = async (req, res) => {
  try {
    console.log("req.ip", req.ip);
    const user = await userModel.find({});
    res.status(200).send(user);
  } catch (error) {
    console.log("error", error);
    res.status(200).send(error?.message);
  }
};
