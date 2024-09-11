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

export const addPostSchema = Yup.object({
  title: Yup.string().min(3).required(),
  body: Yup.string().min(8).required(),
  userId: Yup.string().min(2).required(),
});

export const addTodoSchema = Yup.object({
  todo: Yup.string().min(3).required(),
  userId: Yup.string().min(2).required(),
});
