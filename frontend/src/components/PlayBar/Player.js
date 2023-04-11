import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import './Player.css';
// import 'react-h5-audio-player/lib/styles.css';
import { useSelector } from 'react-redux';

const Player = () => {
const currentSong = useSelector(state => state.playbar && state.playbar.currentSong ? state.playbar.currentSong : null)
const mp3 = useSelector(state => state.playbar && state.playbar.currentSong ? state.playbar.currentSong.mp3 : null)

const playlogo = (<i className="fa-solid fa-circle-play"></i>)
const pauselogo = (<i className="fa-solid fa-circle-pause"></i>)
const forward= (<i className="fa-solid fa-forward-step"></i>)
const backward = (<i className="fa-solid fa-backward-step"></i>)
return (
    <>
        <AudioPlayer
            src={mp3}
            layout="stacked-reverse"
            defaultCurrentTime="" 
            defaultDuration="" 
            showSkipControls={true}
            showJumpControls={false}
            customAdditionalControls={[]}
            // customVolumeControls={[]}
            customIcons={{
                play: playlogo,
                pause: pauselogo,
                previous: backward,
                next: forward
              }} 
        />
    </>
)
}

export default Player;

