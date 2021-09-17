import RTLLayout from "../../clientTest/src/layouts/RTL/RTL";
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import constants from './constants';
import AdminRoute from "../../clientTest/src/components/AdminRoute/AdminRoute";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";
import AdminLayout from './layouts/Admin/Admin'
import ThemeContextWrapper from "./components/ThemeWrapper/ThemeWrapper";


function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/"/>
                <Route exact path="/auth/signup" component={SignUp}/>
                <Route exact path="/auth/signin" component={SignIn}/>
                <ThemeContextWrapper>
                    <AdminRoute role={constants.adminRole} exact to="/admin" component={AdminLayout}/>
                </ThemeContextWrapper>

            </Switch>
        </BrowserRouter>

    );
}

export default App;

