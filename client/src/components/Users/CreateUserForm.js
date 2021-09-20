import {Formik,Form} from 'formik';
import {useDispatch} from "react-redux";
import {Button} from "@mui/material";
import {signUpSchema} from "../../validation/validationSchema";
import {adminUserCreate} from "../../redux/actions/creatorAdminActions";
import InputForm from '../auth/InputForm';

const CreateUserForm = props => {
    const {adminId, createUserHandler} = props;
    const dispatch = useDispatch()
    const onSubmit = (values,formikBag) => {
        dispatch(adminUserCreate({adminId,values}));
        formikBag.resetForm();
        createUserHandler();
    }
    return (
        <div>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password: ""
                }}
                onSubmit={onSubmit}
                validationSchema={signUpSchema}
            >
                <Form>
                    <InputForm name="name" placeholder="enter user name"/>
                    <InputForm name="email" placeholder="enter user email"/>
                    <InputForm name="password" placeholder="enter user password"/>
                    <Button variant="outlined" type="submit">
                        Confirm
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}
export default CreateUserForm;