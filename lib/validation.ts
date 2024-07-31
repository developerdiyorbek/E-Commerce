import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().min(6).required(),
  password: Yup.string().min(10).required(),
});
