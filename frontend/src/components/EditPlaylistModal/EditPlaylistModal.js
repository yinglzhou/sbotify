import { useState } from 'react';
import './EditPlaylistModal.css';
import { updatePlaylist } from '../../store/playlist';
import { useSelector } from 'react-redux';
import { setEditModalStatus } from '../../store/ui';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

const EditPlaylistModal = () => {
    const dispatch = useDispatch();
    const {playlistId} = useParams();
    const ownerid = useSelector(state => state.session && state.session.user ? state.session.user.id : null)
    const playlist_name = useSelector(state => state.playlists && state.playlists.playlist ? state.playlists.playlist.name : null)

    const [playlistName, setPlaylistName] = useState(playlist_name);

    const handleName = (e) => {
        setPlaylistName(e.target.value);
    }
    const handleClose = (e) => {
        if (e.target.id !== 'edit-inner-container' && !e.target.closest('#edit-inner-container')) {
            dispatch(setEditModalStatus(false))
        }
        
    }

    const handleModalSave = () => {
        dispatch(updatePlaylist(playlistId, {name: playlistName}))
        dispatch(setEditModalStatus(false))
    };

    return (
        <div id='login-big-container' onClick={handleClose}>
            <div id='edit-inner-container'>
                <div id='edit-modal-header'>
                    <h3>Edit Details</h3>
                    <div id="edit-close" onClick={() => dispatch(setEditModalStatus(false))}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                </div>

                <div id='edit-image-text-container'>
                    <div id='edit-album-art'>
                        <img src={require('./assets/no-cover.png')}/>
                    </div>

                    <div id='edit-text-side'>
                        <input
                            id='playlist-name-update'
                            type='text'
                            value={playlistName}
                            onChange={handleName}
                            placeholder={playlistName}
                            />
                        <div id='edit-description-placeholder'></div>
                    </div>
                </div>

                <div className="login-modal-buttons" id='only-edit' onClick={handleModalSave}>
                    Save
                </div>
            </div>
        </div>
    )
}
export default EditPlaylistModal;