import { Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" />
        <Route exact path="/signin" />
        <Route exact path="/signUp" />
      </Switch>
    </>
  );
}

export default App;
