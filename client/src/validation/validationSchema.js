import * as Yup from "yup";

export const signUpSchema = Yup.object().shape({
  name: Yup.string().required().min(4),
  email: Yup.string().required().email().min(5),
  password: Yup.string().required().min(4),
});
export const signInSchema = Yup.object().shape({
  email: Yup.string().email().required().min(5),
  password: Yup.string().required().min(4)
});
