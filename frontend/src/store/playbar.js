export const SET_CURRENT_SONG = 'playbar/SET_CURRENT_SONG';
export const SET_PLAY_STATUS = 'playbar/SET_PLAY_STATUS';
export const SET_CURRENT_TIME = 'playbar/SET_CURRENT_TIME';
export const SET_DURATION = 'playbar/SET_DURATION';
export const SET_CURRENT_ALBUM_PLAYBAR = 'playbar/SET_CURRENT_ALBUM_PLAYBAR';
export const SKIP_TO_NEXT_SONG = 'playbar/SKIP_TO_NEXT_SONG';
export const SKIP_TO_PREV_SONG = 'playbar/SKIP_TO_SKIP_SONG';
export const RESET_SONG_INDEX = 'playbar/RESET_SONG_INDEX';
export const SET_CURRENT_PLAYLIST_PLAYBAR = 'playbar/SET_CURRENT_PLAYLIST_PLAYBAR';

export const skipToNextSong = () => ({
    type: SKIP_TO_NEXT_SONG
})
export const resetSongIndex = () => ({
    type: RESET_SONG_INDEX
})

export const skipToPrevSong = () => ({
    type: SKIP_TO_PREV_SONG
})


export const receiveCurrentSong = (song) => ({
    type: SET_CURRENT_SONG,
    payload: song
});

export const receiveCurrentAlbum = (arrOfSongs) => ({
    type: SET_CURRENT_ALBUM_PLAYBAR,
    payload: arrOfSongs
});
export const receiveCurrentPlaylist = (arrOfSongs) => ({
    type: SET_CURRENT_PLAYLIST_PLAYBAR,
    payload: arrOfSongs
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

export const resetSongId = () => async dispatch => {
    dispatch(resetSongIndex())
}

export const playSong = (song) => async dispatch => {
    dispatch(receiveCurrentSong(song));
    dispatch(receivePlayState(true));
};

export const isPlayingSong = () => async dispatch => {
    dispatch(receivePlayState(true));
}
export const playAlbum = (arrOfSongs) => async dispatch => {
    dispatch(receiveCurrentAlbum(arrOfSongs));
}

export const playPlaylist = (arrOfSongs) => async dispatch => {
    dispatch(receiveCurrentPlaylist(arrOfSongs));
}

export const pauseSong = () => async dispatch => {
    dispatch(receivePlayState(false));
};

export const setCurrentTime = (time) => async dispatch => {
    dispatch(receiveCurrentTime(time))
};

export const setDuration = (duration) => async dispatch => {
    dispatch(receiveDuration(duration))
};

const initialState = {
    currentAlbum: null,
    currentSongIndex: 0,
    currentSong: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0
}

const playbarReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_SONG:
            let currentSongId;
            if (state.currentAlbum) {
                currentSongId = state.currentAlbum.indexOf(action.payload)
            }
            if (state.currentPlaylist) {
                currentSongId = state.currentPlaylist.indexOf(action.payload)
            }
            
            return { ...state, currentSong: action.payload, currentSongIndex: currentSongId}
            
        case SET_CURRENT_ALBUM_PLAYBAR:
            return { ...state, currentAlbum: action.payload }
        case SET_CURRENT_PLAYLIST_PLAYBAR:
            return { ...state, currentPlaylist: action.payload }
        case RESET_SONG_INDEX:
            return {...state, currentSongIndex: 0}
        case SKIP_TO_NEXT_SONG:
            let next_current_song_id = state.currentSongIndex + 1;
            
            if (state.currentAlbum) {
                if (next_current_song_id > state.currentAlbum.length - 1) {
                    next_current_song_id = 0;
                }
            }

            if (state.currentPlaylist) {
                if (next_current_song_id > state.currentPlaylist.length - 1) {
                    next_current_song_id = 0;
                }
            }
            let next_song;
            if (state.currentAlbum) {
                next_song = state.currentAlbum[next_current_song_id];
            }
            if (state.currentPlaylist) {
                next_song = state.currentPlaylist[next_current_song_id];
            }

            return {...state, 
                currentSongIndex: next_current_song_id,
                currentSong: next_song
             }



        case SKIP_TO_PREV_SONG:
            let prev_current_song_id = state.currentSongIndex - 1;
            
            if (state.currentAlbum) {
                if (prev_current_song_id < 0) {
                    prev_current_song_id = state.currentAlbum.length - 1;
                }
            }

            if (state.currentPlaylist) {
                if (prev_current_song_id < 0) {
                    prev_current_song_id = state.currentPlaylist.length - 1;
                }
            }
            let prev_song;
            if (state.currentAlbum) {
                prev_song = state.currentAlbum[prev_current_song_id];
            }
            if (state.currentPlaylist) {
                prev_song = state.currentPlaylist[prev_current_song_id];
            }


            return {...state, 
                currentSongIndex: prev_current_song_id,
                currentSong: prev_song
             }



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


