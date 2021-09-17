import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {Grid} from "@mui/material";
import NavTabs from "../NavTabs";
import UserCard from "./UserCard";
import {adminGetUsers} from "../../redux/actions/creatorAdminActions";

function Users(props) {
    const {users, isFetching, error} = useSelector(state => state.admin);
    const {
        user: {
            id: adminId
        }
    } = useSelector(state => state.auth)
    console.log(users)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(adminGetUsers({id: adminId}))
    }, [dispatch])
    return (
        <div>
            <NavTabs/>
            <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
                {users.map((u) => (
                    <Grid item xs={2} sm={4} md={4} key={u.id}>
                        <UserCard user={u} adminId={adminId}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Users;