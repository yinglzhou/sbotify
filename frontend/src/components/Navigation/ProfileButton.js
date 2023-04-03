import { useState } from 'react';
import {useDispatch} from 'react-redux';

const ProfileButton = ({user}) => {
    const [showMenu, setShowMenu] = useState(false);
    const dispatch = useDispatch();

    function openMenu(e) {
        e.preventDefault();
        if (showMenu) return;
        setShowMenu(true)
    }
    
    return (
        <>
        <p>Hi</p>
            <button onClick={openMenu}>
                <i className="fa-solid fa-user"/>
                <p>{user.name}</p>
            </button>
            {showMenu && (
                <ul className='profile-dropdown'>
                    <li>
                        <p>Profile</p>
                    </li>
                </ul>
            )}
        </>
    )
}

export default ProfileButton;