import { Link } from 'react-router-dom';
import './SideNav.css'
import PlaylistShow from '../PlaylistShow/PlaylistShow';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { createPlaylist, fetchAllPlaylists } from '../../store/playlist';

const SideNav = ({sessionUser}) => {
    const dispatch = useDispatch();
    const playlists = useSelector(state => state.playlists && state.playlists.playlists ? Object.values(state.playlists.playlists) : [])

    const handlePlaylist = (e) => {
        const myPlaylists = playlists.filter(playlist => playlist.ownerId === sessionUser.id && playlist.name.startsWith('My Playlist'));
        // debugger
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
                    {/* <div className='side-icon' id='book-icon'><i className="fa-solid fa-book"></i></div> */}
                    {/* <div className='side-option-text'>Your Library</div> */}
                </div>
            </div>

            <div className='side-options-holder'>
                <div className='side-options'>
                    <div className='side-icon' id='square-plus'><i className="fa-solid fa-square-plus"></i></div>
                    <div className='side-option-text' onClick={handlePlaylist}>Create Playlist</div>
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