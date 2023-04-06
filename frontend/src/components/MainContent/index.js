import './MainContent.css';
import { useSelector } from 'react-redux';

const MainContent = () => {
// const sessionUser = useSelector(state => state.session.user);

    return (
        <div id='main-content-container'>
            <h1>Main Content: Hello!</h1>
            <div>
                <h2>Albums</h2>
            </div>
        </div>
    )
}

export default MainContent;