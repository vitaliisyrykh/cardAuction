import {Formik, Form} from "formik";
import {useDispatch} from "react-redux";
import {signInSchema} from "../../validationSchems";
import {signInLogin} from "../../redux/actions/creatorAuthAction.js";
import FormInput from "./FormInput";

const SignIn = props => {
    const dispatch = useDispatch();
    const onSubmit = (values, formikBag) => {
        dispatch(signInLogin(values));
        formikBag.resetForm();
    }
    return (
        <div>
            <Formik initialValues={{
                email: "",
                password: ""
            }}
                    onSubmit={onSubmit}
                    validationSchema={signInSchema}
            >
                <Form>
                    <FormInput name="email" type="text" placeholder="enter you email"/>
                    <FormInput name="password" type="text" placeholder="enter ypu password"/>
                    <button type="submit">Confirm</button>
                </Form>
            </Formik>
        </div>
    );
};

export default SignIn;