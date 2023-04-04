import { Link } from 'react-router-dom';
import './SideNav.css'

const SideNav = () => {
    return (
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
    )
}

export default SideNav;