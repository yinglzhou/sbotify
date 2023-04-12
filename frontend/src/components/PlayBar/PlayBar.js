import { useSelector } from 'react-redux';
import './PlayBar.css';
import Player from './Player';

const PlayBar = () => {
const albumart = useSelector(state => state.playbar.currentSong ? state.playbar.currentSong.albumCover : require('./assets/no-cover.jpeg'))
const title = useSelector(state => state.playbar.currentSong ? state.playbar.currentSong.title : null);
const artist = useSelector(state => state.playbar.currentSong ? state.playbar.currentSong.name : null)


return (
        <div id='main-playbar'>
            <div id='playbar-flex-container'>

                <div id='left-playbar'>
                    <img id='mini-album-cover'
                        src={albumart}/>
                    <div id='titlewartist'>
                        <div id='just-title'>{title}</div>
                        <div id='just-artist'>{artist}</div>
                    </div>
                </div>
                <div id='playbar-middle'>
                    <div><Player/></div>
                </div>

                <div id='right-playbar-placeholder'>
                </div>
            </div>
        </div>
    )
}

export default PlayBar;