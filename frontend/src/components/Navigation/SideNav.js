import { Link } from 'react-router-dom';
import './SideNav.css'
import PlaylistShow from '../PlaylistShow/PlaylistShow';

const SideNav = ({sessionUser}) => {
    return (
        <div id="side-bar">
            <Link to="/">
                <img className="icon"
                    src={require('./assets/spot-logo.png')}
                />
            </Link>

            <div className='side-options-holder'>
                <div className="side-options">
                    <div className='side-icon'><i className="fa-solid fa-house"></i></div>
                    <Link to='/' className='side-option-text'>
                        <div >Home</div>
                    </Link>
                </div>
                <div className="side-options">
                    <div className='side-icon' id='book-icon'><i className="fa-solid fa-book"></i></div>
                    <div className='side-option-text'>Your Library</div>
                </div>
            </div>

            <div className='side-options-holder'>
                <div className='side-options'>
                    <div className='side-icon' id='square-plus'><i className="fa-solid fa-square-plus"></i></div>
                    <div className='side-option-text'>Create Playlist</div>
                </div>
            </div>

            <div id='side-option-bottom-border'/>

            <div className='side-options-holder-playlists'>
                {sessionUser && <PlaylistShow />}
            </div>
        </div>
    )
}

export default SideNav;