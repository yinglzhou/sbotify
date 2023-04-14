import { useSelector } from "react-redux";
import { NavLink, useLocation} from "react-router-dom";
import './Navigation.css'
import ProfileButton from "./ProfileButton";
import SearchBar from "./SearchBar";

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);
    const location = useLocation();

    let sessionLinks;
    let bar;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser}/>
        )
        bar =             
        <div id="nav-bar">
            <div className="container">
            {location.pathname === '/search' && <SearchBar />}
                <div className='profile-button-holder'>
                    {sessionLinks}
                </div>
            </div>
        </div>
    } else {
        sessionLinks = (
            <div className="links">
                {location.pathname === '/search' && <SearchBar />}
                <div id="signup">
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
                <div id="login">
                    <NavLink to="/login">Log in</NavLink>
                </div>
            </div>
        )
        bar =             
        <div id="nav-bar">
            <div className="container">
                <div>
                    {sessionLinks}
                </div>
            </div>
        </div>
    }
    return (
        <>
            {bar}
        </>
    )
}

export default Navigation;