import { Route, Switch, useParams } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";
import SideNav from "./components/Navigation/SideNav";
import MainContent from "./components/MainContent";
import AlbumSongs from "./components/AlbumSongs/AlbumSongs";
import { useEffect } from "react";

function App() {
  const sessionUser = useSelector(state => state.session.user)

  // const {albumId} = useParams();
  return (
    <>
      <Switch>
        <Route exact path="/">
            <Navigation />
            <SideNav />
            <MainContent />
        </Route>

        <Route path="/login">
          <LoginFormPage />
        </Route>

        <Route path="/signup">
          <SignupFormPage />
        </Route>

        <Route path={`/albums/:albumId`}>
          <Navigation/>
          <SideNav/>
          <AlbumSongs/>
        </Route>

      </Switch>
    </>
  );
}

export default App;