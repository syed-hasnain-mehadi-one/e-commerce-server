import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      unique: [true, "Email should  be unique"],
      required: [true, "Email should not be null"],
      min: [5, "Email must be greater than 5"],
      max: [25, "Email must be less than 25"],
    },
    username: {
      type: String,
      unique: [true, "username should  be unique"],
      required: [true, "username should not be null"],
      min: [5, "username must be greater than 5"],
      max: [25, "username must be less than 25"],
    },
    firstName: {
      type: String,
      required: [true, "first name should not be null"],
      min: [3, "first name must be greater than 2"],
      max: [10, "first name must be less than 10"],
    },
    lastName: {
      type: String,
      required: [true, "last name should not be null"],
      min: [3, "last name must be greater than 2"],
      max: [10, "last name must be less than 10"],
    },
    password: {
      type: String,
      required: [true, "password should not be null"],
      select: false,
    },
    isActive: {
      type: Boolean,
      default: false,
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
