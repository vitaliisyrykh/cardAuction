import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import constants from './constants';
import AdminRoute from "./AdminRoute/AdminRoute";
import SignUp from "./components/auth/SignUp";
import SignIn from "./components/auth/SignIn";


function App() {
    return (
        <BrowserRouter>
            <Switch>
               <Route exact path="/auth"/>
                <Route exact path="/auth/signup" component={SignUp}/>
                <Route exact path="/auth/signin" component={SignIn}/>
            </Switch>
        </BrowserRouter>

    );
}

export default App;

