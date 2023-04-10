
export const SET_CURRENT_SONG = 'playbar/SET_CURRENT_SONG';
export const SET_PLAY_STATUS = 'playbar/SET_PLAY_STATUS';
export const SET_CURRENT_TIME = 'playbar/SET_CURRENT_TIME';
export const SET_DURATION = 'playbar/SET_DURATION';

export const receiveCurrentSong = (song) => ({
    type: SET_CURRENT_SONG,
    payload: song
});

export const receivePlayState = (isPlaying) => ({
    type: SET_PLAY_STATUS,
    payload: isPlaying
});

export const receiveCurrentTime = (time) => ({
    type: SET_CURRENT_TIME,
    payload: time
});

export const receiveDuration = (duration) => ({
    type: SET_DURATION,
    payload: duration
});

export const playSong = (song) => async dispatch => {
    dispatch(receiveCurrentSong(song));
    dispatch(receivePlayState(true));
};

export const pauseSong = () => async dispatch => {
    dispatch(receivePlayState(true));
};

export const setCurrentTime = (time) => async dispatch => {
    dispatch(receiveCurrentTime(time))
};

export const setDuration = (duration) => async dispatch => {
    dispatch(receiveDuration(duration))
};

const initialState = {
    currentSong: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0
}

const playbarReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SONG:
            return { ...state, currentSong: action.payload };
        case SET_PLAY_STATUS:
            return { ...state, isPlaying: action.payload }
        case SET_CURRENT_TIME:
            return { ...state, currentTime: action.payload }
        case SET_DURATION:
            return { ...state, duration: action.payload }
        default:
            return state;
    }
};

export default playbarReducer;


