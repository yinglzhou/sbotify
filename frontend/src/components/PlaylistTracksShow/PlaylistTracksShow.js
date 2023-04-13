import { useDispatch } from 'react-redux';
import './PlaylistTrackShow.css';
import { useEffect } from 'react';
import { fetchPlaylist } from '../../store/playlist';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { playPlaylist, playSong } from '../../store/playbar';
import {fetchPlaylistTracks} from '../../store/playlist_track'

const PlaylistTrackShow = () => {
    const dispatch = useDispatch();
    const {playlistId} = useParams();
// debugger
    useEffect(()=>{
        dispatch(fetchPlaylist(playlistId))
        // dispatch(fetchPlaylistTracks(playlistId))
    }, [playlistId])

    const tracks = useSelector(state => state.playlist_tracks ? Object.values(state.playlist_tracks) : [])
    const playlist_name = useSelector(state => state.playlists && state.playlists.playlist ? state.playlists.playlist.name : null)
    const numsongs = tracks.length
    const creator = useSelector(state => state.session && state.session.user ? state.session.user.name : null)
    
    const handleClick = (track) => (e) => {
        e.preventDefault();
        dispatch(playPlaylist(tracks))
        dispatch(playSong(track))
        console.log(`playing ${track.title}`);
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
                        {/* {sessionUser && isPlaying && 
                            <div id='album-play-button'><i className="fa-solid fa-circle-pause" style={{color: '#1ED760',}} /></div>}
                        {sessionUser && !isPlaying && 
                            <div onClick={handleClickGreen()} id='album-play-button'><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>} */}
                        {/* {!sessionUser &&  */}
                        <div id='album-play-button'><i className="fa-solid fa-circle-play" style={{color: '#1ED760',}} /></div>
                        { }
                        

                        {/* <div className="heart-options" id='heart-album'><i className="fa-regular fa-heart" 
                        /></div> */}
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
                            {tracks.map((track, i) => {
                                return (
                                <>
                                    <div id='individual-song-holder' onClick={handleClick(track)} >
                                        <div id='individual-songs'>

                                                <div>{i + 1}</div>
                                                <div id='individual-title'>{track.title}</div>
                                                <div>{track.duration}</div>
                                        </div>
                                    </div>
                                </>
                                
                                
                            )})}
                        </div>

                    </div>
                </div>




        </div>
    )
}
export default PlaylistTrackShow;