import {useSelector} from 'react-redux';
import {Redirect, Route} from "react-router-dom";

const AdminRoute =({role, ...rest})=>{
    const {user, isFetching} =useSelector(state => state.auth);
    if(isFetching){
        return '...loading'
    }
    if(user && role && role.includes(user.role)){
        return <Route {...rest}/>
    }
    return <Redirect to="/signin"/>
}
export default AdminRoute