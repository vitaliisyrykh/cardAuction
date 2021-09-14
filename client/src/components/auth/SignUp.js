import React from "react";
import {Formik, Form, Field} from "formik";
import {useDispatch} from 'react-redux';
import {signUpSchema} from "../../validation/validationSchema";
import {signUpRequest} from "../../actions/creatorAction";

const SignUp = () => {
    const dispatch = useDispatch()
    const onSubmit = (values, formikBag) => {
        console.log(values)
        dispatch(signUpRequest(values))
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
                    <Field name="name" placeholder="enter you name"/>
                    <Field name="email" placeholder="enter you email"/>
                    <Field name="password" placeholder="enter you password"/>
                    <button type="submit">Confirm</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SignUp;
