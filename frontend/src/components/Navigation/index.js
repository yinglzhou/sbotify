import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import './Navigation.css'
import ProfileButton from "./ProfileButton";

const Navigation = () => {
    const sessionUser = useSelector(state => state.session.user);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser}/>
        )
    } else {
        sessionLinks = (
            <div className="links">
                <div id="signup">
                    <NavLink to="/signup">Sign Up</NavLink>
                </div>
                <div id="login">
                    <NavLink to="/login">Log in</NavLink>
                </div>
            </div>
        )
    }
    return (
        <>
            <div id="side-bar">
                <Link to="/">
                    <img className="icon"
                        src={require('./assets/spot-logo.png')}
                    />
                </Link>

                <div className="side-options">
                    <a href="/">Home</a>
                </div>
            </div>
        
            <div id="nav-bar">
                <ul >
                    <li>
                        <div>
                            {sessionLinks}
                        </div>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Navigation;