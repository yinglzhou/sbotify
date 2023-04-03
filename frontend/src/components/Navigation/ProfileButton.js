import { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
import * as sessionActions from '../../store/session';

const ProfileButton = ({user}) => {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();
    const [caret, setCaret] = useState(<i className="fa-solid fa-caret-down"></i>);

    function openMenu() {
        if (showMenu) return;
        setShowMenu(true)
        setCaret(<i className="fa-solid fa-caret-up"></i>)
    };

    useEffect(() => {
        if (!showMenu) return;
        const closeMenu = () => {
            setShowMenu(false);
            setCaret(<i className="fa-solid fa-caret-down"></i>)
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu, caret])

    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    }

    

    return (
        <>
        <p>Hi</p>
            <button onClick={openMenu}>
                <i className="fa-solid fa-user"/>
                <p>{user.name}</p>
                {caret}
            </button>
            {showMenu && (
                <ul className='profile-dropdown'>
                    <li>
                        <p>Profile</p>
                    </li>
                    <li>
                        <button onClick={logout}>Log out</button>
                    </li>
                </ul>
            )}
        </>
    )
}

export default ProfileButton;