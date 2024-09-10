import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().min(4).required(),
  password: Yup.string().min(6).required(),
});
