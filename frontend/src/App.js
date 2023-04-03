import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <h1>Hello from App</h1>
        <a href="/login">Login Form Link</a>
      </Route>

      <Route path="/login">
        <LoginFormPage />
      </Route>

      {/* <Route path="/signup">
        <SignupFormPage />
      </Route> */}
    </Switch>
  );
}

export default App;