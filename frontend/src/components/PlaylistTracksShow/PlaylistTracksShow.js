import { useDispatch } from 'react-redux';
import './PlaylistTrackShow.css';
import { useEffect } from 'react';
import { deletePlaylist, fetchPlaylist, removePlaylist, fetchAllPlaylists } from '../../store/playlist';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { playPlaylist, playSong, receivePlayState, resetSongId } from '../../store/playbar';
import {deletePlaylistTrack, fetchPlaylistTracks} from '../../store/playlist_track';
import { useHistory } from 'react-router-dom';
import EditPlaylistModal from '../EditPlaylistModal/EditPlaylistModal';
import { setEditModalStatus } from '../../store/ui';

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
    const isPlaying = useSelector(state => state.playbar ? state.playbar.isPlaying : null)
    const currentPlaylistId = useSelector(state => state.playbar ? state.playbar.currentPlaylistId : null)
    const creator = useSelector(state => state.session && state.session.user ? state.session.user.name : null)
    
    const [showMenu, setShowMenu] = useState(false);
    const [showSongMenu, setShowSongMenu] = useState("");
    const [activeTrackId, setActiveTrackId] = useState(null);
    const [isHovered, setIsHovered] = useState(null);

    const sameAlbumCheck = (playlistId === currentPlaylistId)

    const handleClickGreen = ()=>(e) => {
        e.preventDefault();
        if (!isPlaying) {
            dispatch(playSong(tracks[0]))
            dispatch(playPlaylist(tracks, playlistId))
            dispatch(resetSongId())
            dispatch(receivePlayState(true))
        }

        if (isPlaying && sameAlbumCheck) {
            dispatch(receivePlayState(false))
        }

        if (isPlaying && !sameAlbumCheck) {
            dispatch(playSong(tracks[0]))
            dispatch(playPlaylist(tracks, playlistId))
            dispatch(resetSongId())
            dispatch(receivePlayState(true))
        }
    }


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
    function openSongMenu(track) {
        setShowSongMenu(track.id);
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
        };
        document.addEventListener('click', closeMenu);
        return () => {document.removeEventListener('click', closeMenu);

    };
    }, [showMenu])
    useEffect(() => {
        if (!showSongMenu) return;
        const closeSongMenu = () => {
            setShowSongMenu(false);
        };
        document.addEventListener('click', closeSongMenu);
        return () => {document.removeEventListener('click', closeSongMenu);

    };}, [showSongMenu])


    const handleClick = (track) => (e) => {
        e.preventDefault();
        dispatch(playPlaylist(tracks))
        dispatch(playSong(track))
        // console.log(`playing ${track.title}`);
    }
    const handleDelete = (playlistId) => (e) => {
        dispatch(deletePlaylist(playlistId))
        .then(()=>(dispatch(fetchAllPlaylists())))
        .then(() => history.push("/"))
    }
    const handleDeleteTrack = (playlistId, playlistTrackId) => (e) => {
        dispatch(deletePlaylistTrack(playlistId, playlistTrackId))
    }

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
                        {isPlaying && sameAlbumCheck &&
                            <div onClick={handleClickGreen()} id='album-play-button'><i className="fa-solid fa-circle-pause" style={{color: '#1ED760',}} /></div>}
                        {(!isPlaying || !sameAlbumCheck) &&
                            <div onClick={handleClickGreen()} id='album-play-button'><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>}
                            
                        {/* {!sessionUser && <div id='album-play-button'><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>} */}
                        
                        

                        {/* <div className="heart-options" id='heart-album'><i className="fa-regular fa-heart" 
                        /></div> */}
                        <div className="heart-options" onClick={openMenu}><i className="fa-solid fa-ellipsis" 
                        /></div>
                        {showMenu && 
                        (<div id='delete-dropdown'>
                            <ul className='profile-dropdown'>
                                <li>
                                    <div onClick={() => dispatch(setEditModalStatus(true))}>Edit Playlist</div>
                                </li>
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
                                        onMouseEnter={() => setActiveTrackId(track.id)}
                                        onMouseLeave={() => setActiveTrackId(null)}>
                                        <div id='song-ellipsis-holder'>
                                                <div id='individual-songs' onClick={handleClick(track)}>
                                                    <div>{i + 1}</div>
                                                    <div id='individual-title'>{track.title}</div>
                                                    <div>{track.duration}</div>
                                                </div>
                                                {activeTrackId === track.id && 
                                                <div id='track-ellipsis' onClick={() => openSongMenu(track)}><i className="fa-solid fa-ellipsis"/></div>}
                                        </div>
                                    </div>
                                    {showSongMenu === track.id && 
                                    (<div id='song-remove-dropdown'>
                                        <ul className='profile-dropdown'>
                                            <li>
                                                <div onClick={handleDeleteTrack(playlistId, track.id)}>Remove this from playlist</div>
                                            </li>
                                        </ul>
                                    </div>)}
                                </>
                                
                                
                                )})}
                        </div>

                    </div>
                </div>


        </div>
    )
}
export default PlaylistTrackShow;