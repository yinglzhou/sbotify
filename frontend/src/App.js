import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation />
      <Switch>
        <Route exact path="/">
          <h1>Hello from App</h1>
        </Route>

        <Route path="/login">
          <LoginFormPage />
        </Route>

        <Route path="/signup">
          <SignupFormPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;