import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import './Player.css';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { pauseSong, skipToNextSong, skipToPrevSong, isPlayingSong, receivePlayState } from '../../store/playbar';

const Player = () => {
    const dispatch = useDispatch();
    const currentSong = useSelector(state => state.playbar && state.playbar.currentSong ? state.playbar.currentSong : null)
    const mp3 = useSelector(state => state.playbar && state.playbar.currentSong ? state.playbar.currentSong.mp3 : null)
    const album = useSelector(state => state.playbar && state.playbar.currentAlbum ? state.playbar.currentAlbum : null)
    const isPlayingg = useSelector(state => state.playbar.isPlaying)

    const playlogo = (<i className="fa-solid fa-circle-play"></i>)
    const pauselogo = (<i className="fa-solid fa-circle-pause"></i>)
    const forward= (<i className="fa-solid fa-forward-step"></i>)
    const backward = (<i className="fa-solid fa-backward-step"></i>)
    const volumeup = (<i className="fa-solid fa-volume-high"></i>)
    const mute = (<i className="fa-solid fa-volume-xmark"></i>)
    
    const audioPlayerRef = useRef(null);

    const handleNext = (e) => {
        e.preventDefault();
        dispatch(skipToNextSong())
    }

    const handlePrevious = (e) => {
        e.preventDefault();
        dispatch(skipToPrevSong())
    }


    useEffect(() => {
        if (audioPlayerRef.current) {
          if (isPlayingg) {
            audioPlayerRef.current.audio.current.play();
          } else {
            audioPlayerRef.current.audio.current.pause();
          }
        }
      }, [isPlayingg]);

return (
    <>
        <AudioPlayer
        ref={audioPlayerRef}
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
            autoPlay={isPlayingg}
            onPlay={() => dispatch(receivePlayState(true))}
            onPause={() => dispatch(receivePlayState(false))}
            onClickNext={handleNext}
            onClickPrevious={handlePrevious}
        />
    </>
)
}

export default Player;

