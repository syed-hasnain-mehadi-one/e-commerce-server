import * as yup from "yup";

export const userSchema = yup.object({
  body: yup.object({
    url: yup.string().url().required(),
    title: yup.string().min(8).max(32).required(),
    content: yup.string().min(8).max(255).required(),
    contact: yup.string().email().required(),
  }),
});
