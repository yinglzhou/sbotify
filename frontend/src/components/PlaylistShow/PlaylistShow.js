import { useEffect } from 'react';
import './PlaylistShow.css';
import { useDispatch } from 'react-redux';
import { fetchAllPlaylists } from '../../store/playlist';
import { useSelector } from 'react-redux';
import PlaylistShowItem from '../PlaylistShowItem/PlaylistShowItem';

const PlaylistShow = () => {
    const dispatch = useDispatch();
    const sessionUserId = useSelector(state => state.session ? state.session.user.id : null)
    const playlists = useSelector(state => state.playlists && state.playlists.playlists ? Object.values(state.playlists.playlists) : [])
    
    const user_playlists = playlists.filter((playlist) => {
        return playlist.ownerId === sessionUserId;
    });

    useEffect(()=>{
        dispatch(fetchAllPlaylists());
    }, [])
    
    return (
            <ul id='playlist-container'>
                {user_playlists.map(playlist => (
                    <PlaylistShowItem key={playlist.id} playlist={playlist}/>
                ))}
            </ul>
    )

}

export default PlaylistShow;