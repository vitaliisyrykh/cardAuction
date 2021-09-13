
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

  );
}

export default App;
