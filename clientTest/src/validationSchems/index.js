import * as Yup from "yup";
import constants from "../constants";

export const signUpSchema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
        .matches(constants.emailRegular, 'Email must be valid')
        .required(),
    password: Yup.string().required(),
    confirmPassword: Yup.string()
        .required()
        .oneOf([Yup.ref('password')], 'Confirmation pass must match password'),
});
export const signInSchema = Yup.object().shape({
    email: Yup.string()
        .matches(constants.emailRegular, 'Email must be valid')
        .required(),
    password: Yup.string().required(),
});
