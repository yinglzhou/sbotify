import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchAlbumSongs } from "../../store/song";
import { useSelector } from "react-redux";
import './AlbumSongs.css';


const AlbumSongs = () => {
    const {albumId} = useParams();
    const dispatch = useDispatch();
    const songs = useSelector(state => state.songs && state.songs.songs ? Object.values(state.songs.songs) : [])
    const album = useSelector(state => state.songs && state.songs.album ? state.songs.album.name : null)
    const artist = useSelector(state => state.songs && state.songs.artist ? state.songs.artist.name : null)

    const numsongs = songs.length;
    useEffect(()=>{
        dispatch(fetchAlbumSongs(albumId))
    },[albumId])

    return (
        <div id='main-content-container-songs'>
            {/* <div id='album-content-container'> */}

                <div id='album-banner'>
                    <img src={require('../assets/ghostie.jpg')} alt="ghost"></img>
                        <div id='next-to-image'>
                            <h6>Album</h6>
                            <div id='album-title-hidden'>{album}</div>
                            <h6>{artist} • {numsongs} songs</h6>
                        </div>
                </div>

                <div id='song-component-container'>

                    <div id='play-like-options'>
                        <div id='album-play-button'><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>
                        <div className="heart-options" id='heart-album'><i className="fa-regular fa-heart" 
                        /></div>
                        <div className="heart-options"><i className="fa-solid fa-ellipsis" 
                        /></div>
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
                                    <div id='individual-song-holder'>
                                        <div id='individual-songs'>
                                            {/* <div id='song-hover'> */}

                                                <div>{i + 1}</div>
                                                <div id='individual-title'>{song.title}</div>
                                                <div>{song.duration}</div>
                                            {/* </div> */}
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