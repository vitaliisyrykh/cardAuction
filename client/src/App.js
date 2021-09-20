import React from "react";
import {Route, Switch} from "react-router-dom";
import constants from './constants';
import AdminRoute from "./components/adminRoute/AdminRoute";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import Admin from "./layout/Admin";
import Users from "./components/Users/Users";
import browserHistory from "./browserHistory";


function App() {
    return (
        <Route history={browserHistory}>
            <Switch>
                <Route exact path="/auth"/>
                <Route exact path="/auth/signup" component={SignUp}/>
                <Route exact path="/auth/signin" component={SignIn}/>
                <AdminRoute role={constants.adminRole} exact path="/admin" component={Admin}/>
                <AdminRoute role={constants.adminRole} exact path="/admin/users" component={Users}/>
            </Switch>
        </Route>
    );
}

export default App;

