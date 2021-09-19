import {Formik, Form, Field} from "formik";
import {useDispatch} from "react-redux";
import {signInSchema} from "../../validation/validationSchema";
import {signInLogin} from "../../redux/actions/creatorAuthAction";
import FormInput from "./FormInput";

const SignIn = props => {
    const dispatch = useDispatch();
    const onSubmit = (values, formikBag) => {
        dispatch(signInLogin(values));
        formikBag.resetForm();
    }
    return (
        <>
            <Formik initialValues={{
                email: "",
                password: ""
            }}
                    onSubmit={onSubmit}
                    validationSchema={signInSchema}
            >
                <Form>
                    <FormInput name="email" placeholder="enter you email"/>
                    <FormInput name="password" placeholder="enter ypu password"/>
                    <button type="submit">Confirm</button>
                </Form>
            </Formik>
        </>
    );
};

export default SignIn;