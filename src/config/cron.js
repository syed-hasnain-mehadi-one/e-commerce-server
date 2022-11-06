import chalk from "chalk";
import userModel from "../models/userModel.js";
import { adsMail } from "./mail.js";
export const cronJob = () => {
  const mailReminder = async () => {
    const TIME = 1000 * 60 * 60 * 1; //1 hrs
    setInterval(async () => {
      console.log("time :", new Date()?.getSeconds());
      const users = await userModel.find({});
      for await (const user of users) {
        adsMail({
          email: user?.email,
          name: user?.username,
          url: "http://localhost:4000/panel/633fa8c3bd60f1d26d024c35/config/woocommerce",
        });
      }
      adsMail({});
    }, TIME);
  };

  const otpReset = async () => {
    const TIME = 1000 * 60 * 10; //10 min
    setInterval(async () => {
      console.log('time', new Date())
      const users = await userModel.updateMany(
        {
          createdAt: { $lte: new Date(new Date().getTime() - 2 * 60000) },
        },
        { $unset: { otp: 1 } }
      );
      console.log("users", users);
    }, TIME);
  };

  try {
    // offer send email
    mailReminder();
    // offer send email
    otpReset();
  } catch (error) {
    console.log(chalk.bgRed.bold(error));
  }
  
};
