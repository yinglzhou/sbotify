import { useState } from 'react';
import './EditPlaylistModal.css';
import { updatePlaylist } from '../../store/playlist';
import { useSelector } from 'react-redux';
const EditPlaylistModal = ({show, handleClose, handleSave, playlistname, playlistId}) => {
    const [playlistName, setPlaylistName] = useState(playlistname);
    const ownerid = useSelector(state => state.session && state.session.user ? state.session.user.id : null)

    const handleName = (e) => {
        setPlaylistName(e.target.value);
    }

    const handleModalSave = () => {
        updatePlaylist(playlistId, {name: playlistName, ownerId: ownerid})
        handleClose();
    };

    if (!show) { return null };
    return (
        <div className='modal-container'>
            <div className='modal-content'>
                <div id='edit-modal-header'>
                    <h3>Edit Details</h3>
                    <button className="close-button" onClick={handleClose}>
                        <i className="fa-regular fa-times" />
                    </button>
                </div>

                <div className='edit-modal-middle'>
                    <div>
                        <img id='mini-album-cover'src={require('./assets/no-cover.png')}/>
                    </div>
                </div>

                <div className='update-fields'>
                    <input
                        id='playlist-name-update'
                        type='text'
                        value={playlistName}
                        onChange={handleName}
                    />
                </div>

                <div className='modal-submit'>
                    <button className='save-button' onClick={handleModalSave}>Save</button>
                </div>
            </div>
        </div>
    )
}
export default EditPlaylistModal;