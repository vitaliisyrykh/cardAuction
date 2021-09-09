<<<<<<< HEAD
import {BrowserRouter, Route, Switch } from "react-router-dom";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/signin" component={SignIn}/>
        <Route exact path="/auth" component={SignUp}/>
      </Switch>
    </BrowserRouter>
=======
import './App.css';

function App() {
  return (
    <div className="App">
     
    </div>
>>>>>>> e141e9b... Add react
  );
}

export default App;
