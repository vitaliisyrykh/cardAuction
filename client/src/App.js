import React from "react";
import { Route, Switch} from "react-router-dom";
import constants from './constants';
//import AdminRoute from "./AdminRoute/AdminRoute";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Admin from "./layout/Admin";
import Users from "./components/Users/Users";


function App() {
    return (
        <Switch>
                <Route exact path="/auth"/>
                <Route exact path="/auth/signup" component={SignUp}/>
                <Route exact path="/auth/signin" component={SignIn}/>
                <Route exact path="/admin" component={Admin}/>
                <Route exact path="/admin/users" component={Users}/>
            </Switch>
    );
}

export default App;

