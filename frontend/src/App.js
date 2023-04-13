import { Redirect, Route, Switch, useParams } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import { useSelector } from "react-redux";
import SideNav from "./components/Navigation/SideNav";
import MainContent from "./components/MainContent";
import AlbumSongs from "./components/AlbumSongs/AlbumSongs";
import PlayBar from "./components/PlayBar/PlayBar";
import PlaylistTrackShow from "./components/PlaylistTracksShow/PlaylistTracksShow";
import Search from "./components/SearchShowPage/SearchShowPage";

function App() {
  const sessionUser = useSelector(state => state.session ? state.session.user : null)

  return (
    <>
      <Switch>
        <Route exact path="/">
            <Navigation />
            <SideNav sessionUser={sessionUser}/>
            <MainContent sessionUser={sessionUser}/>
            {sessionUser && <PlayBar/>}
        </Route>

        <Route path='/search'>
          <Search/>
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>

        <Route path="/signup">
          <SignupFormPage />
        </Route>

        <Route path={`/albums/:albumId`}>
          <Navigation/>
            <SideNav sessionUser={sessionUser}/>
            <AlbumSongs sessionUser={sessionUser}/>
            {sessionUser && <PlayBar/>}
        </Route>

        <Route path={'/playlists/:playlistId'}>
          <Navigation/>
          <SideNav sessionUser={sessionUser}/>
          {sessionUser && <PlaylistTrackShow/>}
          {!sessionUser && <MainContent/>}
          <PlayBar />
        </Route>

      </Switch>
    </>
  );
}

export default App;