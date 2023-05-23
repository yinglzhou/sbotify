import { useDispatch } from 'react-redux';
import './LoginPopUp.css'
import { NavLink } from 'react-router-dom';
import { setLoginModalStatus } from '../../store/ui';
import { useSelector } from 'react-redux';

const LoginPopUp = () => {

    const dispatch = useDispatch();
    const cover = useSelector(state => state.songs && state.songs.album ? state.songs.album.albumCover : null)
    const searchCover = useSelector(state => state.ui ? state.ui.loginModalPic : null) 

    const handleClose = (e) => {
        if (e.target.id !== 'login-inner-container' && !e.target.closest('#login-inner-container')) {
            dispatch(setLoginModalStatus(false))
        }
    }

    return (
        <div id='login-big-container' onClick={handleClose}>
            <div id='login-inner-container'>
                <div id='login-image-text-container'>
                    <div id='login-album-art'>
                        {!searchCover && <img src={cover} alt="cover"></img>}
                        {searchCover && <img src={searchCover} alt="cover"></img>}
                    </div>
                    <div id='login-text-side'>

                        <div id='start-listening-text'>Start listening with a free sbotify account</div>
                        <div id='login-button-holder'>
                            <NavLink to="/signup">
                                <div className="login-modal-buttons" id='only-signup'>
                                    Sign up free
                                </div>
                            </NavLink>

                            <NavLink to="/login">
                                <div className="login-modal-buttons" id='only-login'>
                                Log in
                                </div>
                            </NavLink>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPopUp;