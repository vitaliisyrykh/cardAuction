import {useDispatch, useSelector} from "react-redux";
import {useEffect,useState} from "react";
import {Grid, Button, CircularProgress} from "@mui/material";
import NavTabs from "../NavTabs";
import UserCard from "./UserCard";
import {adminGetUsers} from "../../redux/actions/creatorAdminActions";
import CreateUserForm from "./CreateUserForm";

function Users() {
    const {users, isFetching} = useSelector(state => state.admin);
    const {
        user: {
            id: adminId
        }
    } = useSelector(state => state.auth)
    const [isCreateUser,setIsCreateUser] = useState(false);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(adminGetUsers({id: adminId, offset: users.length, limit:20}))
    }, [dispatch]);

    const createUserHandler = () => {
        setIsCreateUser(prevState => prevState = !isCreateUser)
    }
    return (
        <div>
            <NavTabs/>
            {isFetching && <CircularProgress/>}
            {isCreateUser? (<CreateUserForm adminId={adminId} createUserHandler={createUserHandler}/>):(
                <>
                <Button variant="outlined" onClick={createUserHandler} >
                    Add user
                </Button>
                <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {users.map((u) => (
                <Grid item xs={2} sm={4} md={4} key={u.id}>
                <UserCard user={u} adminId={adminId} isFetching={isFetching}/>
                </Grid>
                ))}
                </Grid>
                </>
            )}
        </div>
    )
}

export default Users;