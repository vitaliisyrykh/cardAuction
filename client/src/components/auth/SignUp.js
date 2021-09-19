import React from "react";
import {Formik, Form, Field} from "formik";
import {useDispatch} from 'react-redux';
import {signUpSchema} from "../../validation/validationSchema";
import {signUpRegistration} from "../../redux/actions/creatorAuthAction";
import FormInput from "./FormInput";

const SignUp = () => {
    const dispatch = useDispatch()
    const onSubmit = (values, formikBag) => {
        console.log(values)
        dispatch(signUpRegistration(values))
        formikBag.resetForm();
    };

    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: "",
                }}
                validationSchema={signUpSchema}
                onSubmit={onSubmit}
            >
                <Form>
                    <FormInput name="name" placeholder="enter you name"/>
                    <FormInput name="email" placeholder="enter you email"/>
                    <FormInput name="password" placeholder="enter you password"/>
                    <button type="submit">Confirm</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SignUp;
