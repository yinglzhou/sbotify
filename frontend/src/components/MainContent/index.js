import './MainContent.css';
import { useSelector } from 'react-redux';
import AlbumShow from '../AlbumShow';
const MainContent = () => {
// const sessionUser = useSelector(state => state.session.user);

    return (
        <div id='main-content-container'>
            <h1>Main Content: Hello!</h1>
            <div id='album-content-container'>
                <h2>Albums</h2>
                <AlbumShow />
            </div>
        </div>
    )
}

export default MainContent;