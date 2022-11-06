import { model, Schema } from "mongoose";

const productSchema = new Schema(
  {
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    url: {
      type: String,
      default: "/images/received.png",
    },
    price: {
      type: Number,
      default: 0.0,
    },
    otp: {
      type: Number,
      default: Math.floor(Math.random() * 1000000),
    },
  },
  { timestamps: true }
);

const userModel = model("user", userSchema);
export default userModel;
