import { Redirect, Route, Switch, useLocation, useParams } from "react-router-dom";
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
import SearchBar from "./components/Navigation/SearchBar";
import LoginPopUp from "./components/LoginPopUp/LoginPopUp";

function App() {
  const sessionUser = useSelector(state => state.session ? state.session.user : null)
  const showLoginModal = useSelector(state => state.ui ? state.ui.showLoginModal : null) 
  const location = useLocation();

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
          {showLoginModal && <LoginPopUp/>}
          <Navigation>
            <SearchBar/>
          </Navigation>
          <Search/>
          <SideNav sessionUser={sessionUser}/>
          {sessionUser && <PlayBar/>}
        </Route>


        <Route path="/login">
          <LoginFormPage />
        </Route>


        <Route path="/signup">
          <SignupFormPage />
        </Route>

        <Route path={`/albums/:albumId`}>
            {showLoginModal && <LoginPopUp/>}
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