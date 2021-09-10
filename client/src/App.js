import {BrowserRouter, Route, Switch } from "react-router-dom";
import signUp from './components/auth/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/signin" />
        <Route exact path="/signUp" component={signUp}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
