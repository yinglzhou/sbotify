import './MainContent.css';
import { useSelector } from 'react-redux';
import AlbumShow from '../AlbumShow/AlbumShow';

// function Time() {
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


const MainContent = () => {
    return (
        <div id='main-content-container'>
            <div id='album-content-container'>
                <h2>Albums</h2>
                <AlbumShow />
            </div>
        </div>
    )
}

export default MainContent;