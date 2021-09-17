import {Formik, Form, Field} from "formik";
import {useDispatch} from "react-redux";
import {signInSchema} from "../../validation/validationSchema";
import {signInLogin} from "../../redux/actions/creatorAuthAction";

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
                    <Field name="email" placeholder="enter you email"/>
                    <Field name="password" placeholder="enter ypu password"/>
                    <button type="submit">Confirm</button>
                </Form>
            </Formik>
        </>
    );
};

export default SignIn;