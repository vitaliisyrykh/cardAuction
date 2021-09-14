import {Formik, Form } from "formik";
import {useDispatch} from "react-redux";
import {signInSchema} from "../../validationSchems";
import {signInRequest} from "../../actions/creatorAction";
import FormInput from "./FormInput";

const SignIn = props => {
    const dispatch = useDispatch();
    const onSubmit = (values, formikBag) => {
        dispatch(signInRequest(values));
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
                    <FormInput name={"email"} type={'text'} placeholder='enter you email'/>
                    <FormInput name={"password"} type={'text'} placeholder='enter ypu password'/>
                    <button type={"submit"}>Confirm</button>
                </Form>
            </Formik>
        </>
    );
};

export default SignIn;