import { useDispatch } from 'react-redux';
import './PlaylistTrackShow.css';
import { useEffect } from 'react';
import { deletePlaylist, fetchPlaylist, removePlaylist, fetchAllPlaylists } from '../../store/playlist';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { playPlaylist, playSong } from '../../store/playbar';
import {fetchPlaylistTracks} from '../../store/playlist_track';
import { useHistory } from 'react-router-dom';
import EditPlaylistModal from '../EditPlaylistModal/EditPlaylistModal';

const PlaylistTrackShow = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const {playlistId} = useParams();

    useEffect(()=>{
        dispatch(fetchPlaylist(playlistId))
    }, [playlistId])

    const tracks = useSelector(state => state.playlist_tracks ? Object.values(state.playlist_tracks) : [])
    const playlist_name = useSelector(state => state.playlists && state.playlists.playlist ? state.playlists.playlist.name : null)
    const numsongs = tracks.length
    const creator = useSelector(state => state.session && state.session.user ? state.session.user.name : null)
    
    const [showMenu, setShowMenu] = useState(false);
    const [showSongMenu, setShowSongMenu] = useState(false);
    const [isHovered, setIsHovered] = useState(null);
    const handleHover = (el) => {
        setIsHovered(el)
    }
    const handleLeave = () => {
        setIsHovered(null)
    }

    function openMenu() {
        if (showMenu) return;
        setShowMenu(true)
    };
    function openSongMenu() {
        setShowSongMenu(prevState => !prevState);
    };

    useEffect(() => {
        // debugger
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);
        return () => {document.removeEventListener('click', closeMenu);

    };
    }, [showMenu])
    useEffect(() => {
        // debugger
        if (!showSongMenu) return;
        const closeSongMenu = () => {
            setShowSongMenu(false);
        };
        document.addEventListener('click', closeSongMenu);
        return () => {document.removeEventListener('click', closeSongMenu);

    };}, [showSongMenu])

    // const [showEditModal, setShowEditModal] = useState(false);

    const handleClick = (track) => (e) => {
        e.preventDefault();
        dispatch(playPlaylist(tracks))
        console.log("ITS HERE")
        dispatch(playSong(track))
        // console.log(`playing ${track.title}`);
    }
    const handleDelete = (playlistId) => (e) => {
        dispatch(deletePlaylist(playlistId))
        .then(()=>(dispatch(fetchAllPlaylists())))
        .then(() => history.push("/"))
    }

    // const handleEditClick = () => {
    //     setShowMenu(false);
    //     setShowEditModal(true)
    // }

    return (
        <div className='main-content-container'>
            <div id='album-banner'>
                <img id='mini-album-cover'src={require('./assets/no-cover.png')}/>
                <div id='next-to-image'>
                    <h6>Playlist</h6>
                    <div id='album-title-hidden' title={playlist_name}>{playlist_name}</div>
                    <h6>{creator} • {numsongs} songs</h6>
                </div>
            </div>


            <div id='song-component-container'>

                    <div id='play-like-options'>
                        {/* {sessionUser && isPlaying && 
                            <div id='album-play-button'><i className="fa-solid fa-circle-pause" style={{color: '#1ED760',}} /></div>}
                        {sessionUser && !isPlaying && 
                            <div onClick={handleClickGreen()} id='album-play-button'><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>} */}
                        {/* {!sessionUser &&  */}
                        <div id='album-play-button'><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>
                        { }
                        

                        {/* <div className="heart-options" id='heart-album'><i className="fa-regular fa-heart" 
                        /></div> */}
                        <div className="heart-options" onClick={openMenu}><i className="fa-solid fa-ellipsis" 
                        /></div>
                        {showMenu && 
                        (<div id='delete-dropdown'>
                            <ul className='profile-dropdown'>
                                {/* <li>
                                    <div onClick={handleEditClick}>Edit Playlist</div>
                                </li> */}
                                <li>
                                    <div onClick={handleDelete(playlistId)}>Delete Playlist</div>
                                </li>
                            </ul>
                        </div>)}
                    </div>

                    <div id='album-grid'>
                    
                        <div id='song-heading'>
                            <div>#</div>
                            <div>Title</div>
                            <div><i className="fa-regular fa-clock" /></div>
                        </div>

                        <div id='song-component'>
                            {tracks.map((track, i) => {
                                return (
                                <>
                                    <div id='individual-song-holder'  
                                        onMouseEnter={() => handleHover(track)}
                                        onMouseLeave={() => handleLeave(track)}>
                                        <div id='song-ellipsis-holder'>
                                                <div id='individual-songs' onClick={handleClick(track)}>
                                                    <div>{i + 1}</div>
                                                    <div id='individual-title'>{track.title}</div>
                                                    <div>{track.duration}</div>
                                                </div>
                                                {isHovered?.id === track.id && 
                                                <div id='track-ellipsis' onClick={openSongMenu}><i className="fa-solid fa-ellipsis"/></div>}
                                        </div>
                                    </div>
                                    {showSongMenu && 
                                    (<div id='song-remove-dropdown'>
                                        <ul className='profile-dropdown'>
                                            <li>
                                                <div>Remove this from playlist</div>
                                            </li>
                                        </ul>
                                    </div>)}
                                </>
                                
                                
                                )})}
                        </div>

                    </div>
                </div>

            {/* {showEditModal && 
                <EditPlaylistModal 
                show={showEditModal} 
                handleClose={setShowEditModal} 
                playlistname={playlist_name}
                playlistId={playlistId}
                />} */}


        </div>
    )
}
export default PlaylistTrackShow;