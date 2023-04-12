import { useEffect } from 'react';
import './PlaylistShow.css';
import { useDispatch } from 'react-redux';
import { fetchAllPlaylists } from '../../store/playlist';
import { useSelector } from 'react-redux';
import PlaylistShowItem from '../PlaylistShowItem/PlaylistShowItem';

const PlaylistShow = () => {
    const dispatch = useDispatch();
    const playlists = useSelector(state => state.playlists && state.playlists.playlists ? Object.values(state.playlists.playlists) : [])

    useEffect(()=>{
        dispatch(fetchAllPlaylists());
    }, [])

    console.log(playlists)
    return (
        // <div>
            <ul id='playlist-container'>
                {playlists.map(playlist => (
                    <PlaylistShowItem key={playlist.id} playlist={playlist}/>
                ))}
            </ul>
        // </div>
    )

}

export default PlaylistShow;