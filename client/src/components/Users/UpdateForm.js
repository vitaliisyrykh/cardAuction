import {Formik, Form, Field} from "formik";
import {useDispatch} from "react-redux";
import {adminUserUpdated} from "../../redux/actions/creatorAdminActions";

function UpdateForm(props) {
    const {user: {name,email}, updateHandler, adminId} = props;
    const dispatch = useDispatch()
    const onSubmit = (values, formikBag) => {
        dispatch(adminUserUpdated({values, adminId}))
        updateHandler()
        formikBag.resetForm();
    }
    return (
        <div>
            <Formik initialValues={{
                name,
                email
            }} onSubmit={onSubmit}>
                <Form>
                    <Field name="name" placegolder="Enter new name"/>
                    <Field name="email" placeholder="Enter new email"/>
                    <button type="submit">Confirm</button>
                </Form>
            </Formik>
        </div>
    )
}

export default UpdateForm;