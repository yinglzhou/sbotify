import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
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
            <NavLink to="/signup">Sign Up</NavLink>
        )
    }
    return (
        <ul>
            <li>
                <NavLink exact to="/">Home</NavLink>
                <div>
                    {sessionLinks}
                </div>
            </li>
        </ul>
    )
}

export default Navigation;