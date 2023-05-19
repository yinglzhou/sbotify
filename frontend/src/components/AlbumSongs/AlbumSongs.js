import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAlbumSongs } from "../../store/song";
import { useSelector } from "react-redux";
import './AlbumSongs.css';
import { playAlbum, playSong, pauseSong, resetSongId, receivePlayState, isPlayingSong } from "../../store/playbar";


const AlbumSongs = ({sessionUser}) => {
    const {albumId} = useParams();
    const dispatch = useDispatch();

    const songs = useSelector(state => state.songs && state.songs.songs ? Object.values(state.songs.songs) : [])
    const album = useSelector(state => state.songs && state.songs.album ? state.songs.album.name : null)
    const artist = useSelector(state => state.songs && state.songs.artist ? state.songs.artist.name : null)
    const cover = useSelector(state => state.songs && state.songs.album ? state.songs.album.albumCover : null)
    const isPlaying = useSelector(state => state.playbar ? state.playbar.isPlaying : null)
    const currentAlbumId = useSelector(state => state.playbar ? state.playbar.currentAlbumId : null)

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
        if (!isPlaying) {
            dispatch(playSong(songs[0]))
            dispatch(playAlbum(songs, albumId))
            dispatch(resetSongId())
            dispatch(receivePlayState(true))
        }

        // if (isPlaying && sameAlbumCheck) {
        //     dispatch(receivePlayState(false))
        // }

        if (isPlaying && !sameAlbumCheck) {
            dispatch(playSong(songs[0]))
            dispatch(playAlbum(songs, albumId))
            dispatch(resetSongId())
            dispatch(receivePlayState(true))
        }
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
                                    <div id='individual-song-holder' onClick={handleClick(song)}>
                                        <div id='individual-songs'>

                                                <div>{i + 1}</div>
                                                <div id='individual-title'>{song.title}</div>
                                                <div>{song.duration}</div>
                                        </div>
                                    </div>
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