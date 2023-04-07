import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";
import { useState } from "react";
import SideNav from "./components/Navigation/SideNav";
import MainContent from "./components/MainContent";

function App() {
  const sessionUser = useSelector(state => state.session.user)
  
  let appear;
  if (sessionUser) {
    appear = true
  } else {
    appear = false
  }

  return (
    <>
      <Switch>
        <Route exact path="/">
          {/* <div id="main"> */}
            <Navigation />
            <SideNav />
            <MainContent />
          {/* </div> */}

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