import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchAlbumSongs } from "../../store/song";
import { useSelector } from "react-redux";
import './AlbumSongs.css';
import { playAlbum, playSong, pauseSong, resetSongId, receivePlayState, isPlayingSong } from "../../store/playbar";
import PlaylistShow from "../PlaylistShow/PlaylistShow";
import { createPlaylistTrack } from "../../store/playlist_track";


const AlbumSongs = ({sessionUser}) => {
    const {albumId} = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const songs = useSelector(state => state.songs && state.songs.songs ? Object.values(state.songs.songs) : [])
    const album = useSelector(state => state.songs && state.songs.album ? state.songs.album.name : null)
    const artist = useSelector(state => state.songs && state.songs.artist ? state.songs.artist.name : null)
    const cover = useSelector(state => state.songs && state.songs.album ? state.songs.album.albumCover : null)
    const isPlaying = useSelector(state => state.playbar ? state.playbar.isPlaying : null)
    const currentAlbumId = useSelector(state => state.playbar ? state.playbar.currentAlbumId : null)
    const playlists = useSelector(state => state.playlists && state.playlists.playlists ? Object.values(state.playlists.playlists) : [])


    const user_playlists = playlists.filter((playlist) => {
        if (sessionUser) return playlist.ownerId === sessionUser.id;
    });



    const [showSongMenu, setShowSongMenu] = useState("");
    const [isHovered, setIsHovered] = useState(null);
    const [showPlaylistOption, setShowPlaylistOption] = useState("");

    const handleHover = (el) => {
        setIsHovered(el)
    }
    const handleLeave = () => {
        setIsHovered(null)
    }
    const handleHoverOption = (song) => {
        setShowPlaylistOption(song.id)
    }

    function openSongMenu(song) {
        console.log(song)
        setShowSongMenu(song.id);
    };
    useEffect(() => {
        if (!showSongMenu) return;
        const closeSongMenu = () => {
            setShowSongMenu("");
        };
        document.addEventListener('click', closeSongMenu);
        return () => {document.removeEventListener('click', closeSongMenu);

    };}, [showSongMenu])
    useEffect(() => {
        if (!showPlaylistOption) return;
        const closePlaylistMenu = () => {
            setShowPlaylistOption("");
        };
        document.addEventListener('click', closePlaylistMenu);
        return () => {document.removeEventListener('click', closePlaylistMenu);

    };}, [showPlaylistOption])


    const numsongs = songs.length;
    useEffect(()=>{
        dispatch(fetchAlbumSongs(albumId))
    },[albumId])

    const handleClick = (song) => (e) => {
        e.preventDefault();
        dispatch(playAlbum(songs, albumId))
        dispatch(playSong(song))
        // console.log(`playing ${song.title}`);
    }
    const sameAlbumCheck = (albumId === currentAlbumId)

    const handleClickGreen = ()=>(e) => {
        e.preventDefault();
        // if (!sessionUser){
        //     history.push('/login');
        //     return
        // }
        
        if (!isPlaying) {
            dispatch(playSong(songs[0]))
            dispatch(playAlbum(songs, albumId))
            dispatch(resetSongId())
            dispatch(receivePlayState(true))
        }

        if (isPlaying && sameAlbumCheck) {
            dispatch(receivePlayState(false))
        }

        if (isPlaying && !sameAlbumCheck) {
            dispatch(playSong(songs[0]))
            dispatch(playAlbum(songs, albumId))
            dispatch(resetSongId())
            dispatch(receivePlayState(true))
        }
    }

    const handleAddToPlaylist = (playlistId, songId) => ()=> {
        const data = {
            playlist_id: playlistId,
            song_id: songId
        }
        console.log(data)
        dispatch(createPlaylistTrack(playlistId, data))
    }


    return (
        <div id='main-content-container-songs'>

                <div id='album-banner'>
                    <img src={cover} alt="cover"></img>
                        <div id='next-to-image'>
                            <h6>Album</h6>
                            <div id='album-title-hidden' title={album}>{album}</div>
                            <h6>{artist} • {numsongs} songs</h6>
                        </div>
                </div>
                <div id='song-component-container'>

                    <div id='play-like-options'>
                        {sessionUser && isPlaying && sameAlbumCheck &&
                            <div onClick={handleClickGreen()} id='album-play-button'><i className="fa-solid fa-circle-pause" style={{color: '#1ED760',}} /></div>}
                        {sessionUser && (!isPlaying || !sameAlbumCheck) &&
                            <div onClick={handleClickGreen()} id='album-play-button'><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>}
                            
                        {!sessionUser && <div id='album-play-button'><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>}
                        
                    </div>

                    <div id='album-grid'>
                    
                        <div id='song-heading'>
                            <div>#</div>
                            <div>Title</div>
                            <div><i className="fa-regular fa-clock" /></div>
                        </div>

                        <div id='song-component'>
                            {songs.map((song, i) => {
                                return (
                                <>
                                    <div id='individual-song-holder' 
                                    onMouseEnter={() => handleHover(song)}
                                    onMouseLeave={() => handleLeave(song)}>
                                    <div id='song-ellipsis-holder'>
                                        <div id='individual-songs' onClick={handleClick(song)}>
                                                <div>{i + 1}</div>
                                                <div id='individual-title'>{song.title}</div>
                                                <div>{song.duration}</div>
                                        </div>
                                        {isHovered?.id === song.id && 
                                                <div id='track-ellipsis' onClick={() => openSongMenu(song)}><i className="fa-solid fa-ellipsis"/></div>}
                                    </div>
                                    </div>
                                    {showSongMenu === song.id && 
                                    (<div id='song-remove-dropdown'>
                                        <ul className='profile-dropdown'>
                                            <li key={'add-to-playlist'}>
                                                <div 
                                                onMouseEnter={() => handleHoverOption(song)}
                                                >Add to playlist</div>
                                            </li>
                                        </ul>

                                    </div>)}

                                    {showPlaylistOption === song.id && sessionUser &&
                                    (<div id='playlist-option-dropdown'>
                                        <ul className='profile-dropdown' >
                                            {/* {console.log(song.title)} */}
                                            {user_playlists.map(playlist => (
                                                <li key={playlist.id}>

                                                <div id='individual-playlist-options' onClick={handleAddToPlaylist(playlist.id, song.id)}>{playlist.name}</div>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>)}
                                </>
                                
                                
                            )})}
                        </div>

                    </div>
                </div>

            </div>
        // </div>
    )
}

export default AlbumSongs;