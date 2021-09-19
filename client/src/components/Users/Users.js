import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {Grid, Button} from "@mui/material";
import NavTabs from "../NavTabs";
import UserCard from "./UserCard";
import {adminGetUsers} from "../../redux/actions/creatorAdminActions";
import SignUp from "../auth/SignUp";

function Users(props) {
    const {users, isFetching, error} = useSelector(state => state.admin);
    const {
        user: {
            id: adminId
        }
    } = useSelector(state => state.auth)
    const [isCreateUser,setIsCreateUser] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(adminGetUsers({id: adminId}))
    }, [dispatch]);

    const createUserHandler = () => {
        setIsCreateUser(prevState => prevState = !isCreateUser)
    }
    return (
        <div>
            <NavTabs/>
            {isCreateUser? (<SignUp/>):(
                <>
                <Button variant="outlined" onClick={createUserHandler} >
                    Add user
                </Button>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {users.map((u) => (
                <Grid item xs={2} sm={4} md={4} key={u.id}>
                <UserCard user={u} adminId={adminId}/>
                </Grid>
                ))}
                </Grid>
                </>
            )}
        </div>
    )
}

export default Users;