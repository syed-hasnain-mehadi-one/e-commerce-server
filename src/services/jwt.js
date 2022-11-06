import jwt from "jsonwebtoken";

export const signJWT = async (payload) => {
  return await jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: "1h",
  });
};

export const verifyJWT = async (token) => {
  return await jwt.verify(token, process.env.JWT_SECRET);
};
