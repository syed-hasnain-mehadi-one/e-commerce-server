import express from "express";
import {
  getUser,
  login,
  signup,
  verifyUserOtp,
} from "../controllers/userController.js";
import { userAuth } from "../middleware/userAuth.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/verifyUserOtp", verifyUserOtp);
router.get("/getUser", userAuth, getUser);

export default router;
