import {Card, Button, Typography} from "@mui/material";
import {useState} from "react";
import {useDispatch} from "react-redux";
import {adminUserDelete} from "../../redux/actions/creatorAdminActions";
import UpdateForm from "./UpdateForm";

function UserCard(props) {
    const {
        user: {
            name, id, email
        }, adminId, user, isFetching
    } = props;
    const [isUpdate, setIsUpdate] = useState(false)
    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(adminUserDelete({adminId, id}))
    }
    const updateHandler = () => {
        setIsUpdate(prevIsUpdate => prevIsUpdate = !isUpdate)
    };
    return (
        <Card>
            {isFetching && "...LOADING"}
            {isUpdate ?
                (<UpdateForm user={user} updateHandler={updateHandler} adminId={adminId}/>) : (
                    <>
                        <Typography variant="h4">
                            {name}
                        </Typography>
                        <Typography variant="h4">
                            {email}
                        </Typography>
                        <Button variant="outlined" onClick={updateHandler}>
                            Update
                        </Button>
                        <Button variant="outlined" color="error" onClick={deleteHandler}>
                            Delete
                        </Button>
                    </>
                )}
        </Card>

    )
}

export default UserCard