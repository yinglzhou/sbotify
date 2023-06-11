import './MainContent.css';
import { useSelector } from 'react-redux';
import AlbumShow from '../AlbumShow/AlbumShow';

export const Time = () => {
        const date = new Date();
        const hours = date.getHours();
    if (hours >= 3 && hours < 12) {
        return 'Morning'
    } else if (hours >= 12 && hours < 18) {
        return 'Afternoon'
    } else {
        return 'Evening'
    }
}


const MainContent = ({sessionUser}) => {

    return (
        <div className='main-content-container'>
            {sessionUser && <div id='greeting'>Good {Time()}</div>}
            <div id='album-content-container'>
                <div id='album-head'>Browse Albums</div>
                <AlbumShow />
            </div>
        </div>
    )
}

export default MainContent;