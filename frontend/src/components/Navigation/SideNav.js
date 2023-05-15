import { Link, useHistory } from 'react-router-dom';
import './SideNav.css'
import PlaylistShow from '../PlaylistShow/PlaylistShow';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createPlaylist, fetchAllPlaylists } from '../../store/playlist';
import { Redirect } from 'react-router-dom';

const SideNav = ({sessionUser}) => {
    const dispatch = useDispatch();
    const playlists = useSelector(state => state.playlists && state.playlists.playlists ? Object.values(state.playlists.playlists) : [])
    const history = useHistory();

    const handlePlaylist = (e) => {
        if (!sessionUser){
            history.push('/login');
            return
        }
            const myPlaylists = playlists.filter(playlist => playlist.ownerId === sessionUser.id && playlist.name.startsWith('My Playlist'));
            let name ='';
            if (myPlaylists.length === 0) {
                name = 'My Playlist #0';
            } else {
                name = myPlaylists[myPlaylists.length - 1].name
            }
            let lastidx = name.length - 1;
            let number = Number(name[lastidx])
            const playlist = {
                name: `My Playlist #${number + 1}`,
                owner_id: sessionUser.id
            };
            dispatch(createPlaylist(playlist))
            .then(()=>(dispatch(fetchAllPlaylists())))
            
    }

    return (
        <div id="side-bar">
            <Link to="/" className='side-option-text'>
                <div className="iconn" >
                    <div id='iconn-logo'><i className="fa-brands fa-spotify"></i></div>
                    <div id='iconn-sbotify' data-hover='spotify'></div>
                </div>
            </Link>

            <div className='side-options-holder'>
                    <Link to='/' className='side-option-text'>
                        <div className="side-options">
                            <div className='side-icon'><i className="fa-solid fa-house"></i></div>
                            <div >Home</div>
                        </div>
                    </Link>

                    <Link to='/search' className='side-option-text'>
                        
                        <div className="side-options">
                            <div className='side-icon' id='book-icon'><i className="fa-solid fa-magnifying-glass"></i></div>
                            <div className='side-option-text'>Search</div>
                        </div>
                        
                    </Link>
                {/* <div className="side-options"> */}
                    {/* <div className='side-icon' id='book-icon'><i className="fa-solid fa-book"></i></div> */}
                    {/* <div className='side-option-text'>Your Library</div> */}
                {/* </div> */}
            </div>

            <div className='side-options-holder'>
                <div className='side-options' onClick={handlePlaylist}>
                    <div className='side-icon' id='square-plus'><i className="fa-solid fa-square-plus"></i></div>
                    <div className='side-option-text'>Create Playlist</div>
                </div>
            </div>

            <div id='side-option-bottom-border'/>

            <div className='side-options-holder-playlists'>
                {sessionUser && <PlaylistShow />}
            </div>
            <div className='side-options-holder-links'>
            <a href="https://github.com/yinglzhou/sbotify" target="_blank" className='side-option-text'>
                <div className='side-options' >
                    <div className='side-icon' id='square-plus'><i className="fa-brands fa-github"></i></div>
                    <div className='side-option-text'>Github</div>
                </div>
                </a>
                <a href="https://linkedin.com/in/yinglzhou" target="_blank" className='side-option-text'>

                <div className='side-options' >
                    <div className='side-icon' id='square-plus'><i className="fa-brands fa-linkedin"></i></div>
                    <div className='side-option-text'>LinkedIn</div>
                </div>
                </a>
            </div>
        </div>
    )
}

export default SideNav;