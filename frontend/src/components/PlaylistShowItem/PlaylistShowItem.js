import './PlaylistShowItem.css';
import { Link } from 'react-router-dom';

const PlaylistShowItem = ({playlist}) => {
    return (
        <div>
            <Link to={`/playlists/${playlist.id}`} className='nav-link'>
                <div className='side-options' id='display-playlist-name'>{playlist.name}</div>
            </Link>
        </div>
    )
}

export default PlaylistShowItem; 