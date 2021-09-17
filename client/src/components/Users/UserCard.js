import {Card, Button, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {adminUserDelete} from "../../redux/actions/creatorAdminActions";
function UserCard(props) {
    const {
        user: {
            name, id
        }, adminId
    } = props;

    const dispatch = useDispatch()
    const deleteHandler = () => {
        dispatch(adminUserDelete({adminId, id}))
    }
    return (
        <Card>
            <Typography variant="h4">
                {name}
            </Typography>
            <Button variant="outlined" color="error" onClick={deleteHandler}>
                Delete
            </Button>
        </Card>
    )
}

export default UserCard