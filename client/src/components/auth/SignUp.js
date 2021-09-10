import React from "react";
import { Formik, Form, Field } from "formik";
import { signUpSchema } from "../../validation/validationSchema";

const SignUp = (props) => {
  const onSubmit = (values, formikBag) => {
    formikBag.resetForm();
  };

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={signUpSchema}
        onSubmit={onSubmit}
      >
        <Field name={"name"} placeholder="enter you name" />
        <Field name={"email"} placeholder="enter you email" />
        <Field name={"password"} placeholder="enter you password" />
        <button type="submit">Confirm</button>
      </Formik>
    </>
  );
};

export default SignUp;
