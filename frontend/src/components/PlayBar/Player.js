import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import './Player.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pauseSong, skipToNextSong, skipToPrevSong, isPlayingSong } from '../../store/playbar';

const Player = () => {
    const dispatch = useDispatch();
    const currentSong = useSelector(state => state.playbar && state.playbar.currentSong ? state.playbar.currentSong : null)
    const mp3 = useSelector(state => state.playbar && state.playbar.currentSong ? state.playbar.currentSong.mp3 : null)
    const album = useSelector(state => state.playbar && state.playbar.currentAlbum ? state.playbar.currentAlbum : null)

    const playlogo = (<i className="fa-solid fa-circle-play"></i>)
    const pauselogo = (<i className="fa-solid fa-circle-pause"></i>)
    const forward= (<i className="fa-solid fa-forward-step"></i>)
    const backward = (<i className="fa-solid fa-backward-step"></i>)
    const volumeup = (<i className="fa-solid fa-volume-high"></i>)
    const mute = (<i className="fa-solid fa-volume-xmark"></i>)
    

    const handleNext = (e) => {
        e.preventDefault();
        dispatch(skipToNextSong())
    }

    const handlePrevious = (e) => {
        e.preventDefault();
        dispatch(skipToPrevSong())
    }

    const handlePause = (e) => {
        dispatch(pauseSong())
    }

    const handlePlay = (e) => {
        dispatch(isPlayingSong())
    }

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
            customIcons={{
                play: playlogo,
                pause: pauselogo,
                previous: backward,
                next: forward,
                volume: volumeup,
                volumeMute: mute
            }} 
            onPause={handlePause}
            onPlay={handlePlay}
            onClickNext={handleNext}
            onClickPrevious={handlePrevious}
        />
    </>
)
}

export default Player;

