import * as Yup from "yup";

export const loginSchema = Yup.object({
  username: Yup.string().min(4).required(),
  password: Yup.string().min(6).required(),
});

export const addUserSchema = Yup.object({
  name: Yup.string().min(4).required(),
  username: Yup.string().min(3).required(),
  gender: Yup.string().min(2).required(),
  birthdate: Yup.string().required(),
});
