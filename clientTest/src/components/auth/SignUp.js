import React from "react";
import {Formik, Form} from "formik";
import {useDispatch} from 'react-redux';
import {signUpSchema} from "../../validationSchems";
import {signUpRegistration} from "../../redux/actions/creatorAction";
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
                    <FormInput name="name" type="text" placeholder="enter you name"/>
                    <FormInput name="email" type="text" placeholder="enter you email"/>
                    <FormInput name="password" type="text" placeholder="enter you password"/>
                    <FormInput name="compare password" type="text" placeholder="repeat you password"/>
                    <button type="submit">Confirm</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SignUp;
