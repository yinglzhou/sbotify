import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import './ProfileButton.css'
import * as sessionActions from '../../store/session';
import { Redirect, useHistory } from 'react-router-dom';
import MainContent from '../MainContent';

const ProfileButton = ({user}) => {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const [caret, setCaret] = useState(<i className="fa-solid fa-caret-down" style={{color: 'white'}}></i>);

    const history = useHistory()
    function openMenu() {
        if (showMenu) return;
        setShowMenu(true)
        setCaret(<i className="fa-solid fa-caret-up" style={{color: 'white'}}></i>)
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
            setCaret(<i className="fa-solid fa-caret-down" style={{color: 'white'}}></i>)
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu, caret])

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
        history.push("/")
    }

    
    return (
        <>
            <button className="profilebutton" onClick={openMenu}>
                    <div id="pfp"><i className="fa-solid fa-user" style={{color: 'white'}}/></div>
                    <div id="user-name">{user.name}</div>
                    <div id="caret">{caret}</div>                
            </button>

            {showMenu && (
                <div id='profile-dropdown-container'>
                    <ul className='profile-dropdown'>
                        {/* <li>
                            <div>Profile</div>
                        </li> */}
                        <li onClick={logout}>
                            <div >Log out</div>
                        </li>
                    </ul>
                </div>
            )}
        </>
    )
}

export default ProfileButton;