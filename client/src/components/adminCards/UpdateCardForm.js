import {Formik, Form} from "formik";
import {useDispatch} from "react-redux";
import {adminUpdateCard} from "../../api/adminApi";
import {Button} from "@mui/material";
import FormInput from "../auth/FormInput";


const UpdateCardForm = props => {
    const {
        adminId, cardUpdateHandler, card: {
            name, origin, id
        }
    } = props;
    const dispatch = useDispatch()
    const onSubmit = (values, formikBag) => {
        dispatch(adminUpdateCard({adminId, cardId: id, data: values}))
        cardUpdateHandler();
        formikBag.resetForm();
    }

    return (
        <div>
            <Formik
                initialValues={{
                    name,
                    origin
                }}
                onSubmit={onSubmit}
            >
                <Form>
                    <FormInput name="name" placeholder="Enter new name"/>
                    <FormInput name="origin" placeholder="Enter new origin"/>
                    <Button type="submit" size="small" variant="outlined" color="success">
                        Submit
                    </Button>
                </Form>
            </Formik>
        </div>
    )
}
export default UpdateCardForm;