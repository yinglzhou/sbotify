import { useDispatch } from 'react-redux';
import './LoginPopUp.css'
import { NavLink } from 'react-router-dom';
import { setLoginModalStatus } from '../../store/ui';

const LoginPopUp = () => {

    const dispatch = useDispatch();
    const handleClose = (e) => {
        if (e.target.id !== 'login-inner-container' && !e.target.closest('#login-inner-container')) {
            dispatch(setLoginModalStatus(false))
        }
    }

    return (
        <div id='login-big-container' onClick={handleClose}>
            <div id='login-inner-container'>
                <div id='login-image-text-container'>
                    <div id='login-album-art'>wertyuioikjhgfdcxsxdfgh</div>
                    <div id='login-text-side'>

                        <div id='start-listening-text'>Start listening with a free sbotify account</div>
                        <div id='login-button-holder'>
                            <div className="login-modal-buttons" id='only-signup'>
                                <NavLink to="/signup">Sign up free</NavLink>
                            </div>
                            <div className="login-modal-buttons" id='only-login'>
                                <NavLink to="/login">Log in</NavLink>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}


export default LoginPopUp;