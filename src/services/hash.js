import hash from "bcryptjs";

export const hashPassword = async (pass) => {
  return await hash.hash(pass, 10);
};

export const verifyPassword = async (pass, hashPass) => {
  return await hash.compare(pass, hashPass);
};
