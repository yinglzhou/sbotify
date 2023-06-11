export const GET_SONGS = 'songs/getSongs';
export const GET_SONG = 'songs/getSong';

export const receiveSongs = songs => ({
    type: GET_SONGS,
    songs
})

export const receiveSong = song => ({
    type: GET_SONG,
    song
})

export const fetchAllSongs = () => async dispatch => {
    const res = await fetch('/api/songs');
    const data = await res.json();
    dispatch(receiveSongs(data));
}

export const fetchSong = (songId) => async dispatch => {
    const res = await fetch(`/api/songs/${songId}`);
    const data = await res.json();
    dispatch(receiveSong(data));
}

export const fetchAlbumSongs = (albumId) => async dispatch => {
    const res = await fetch(`/api/albums/${albumId}/songs`);
    const data = await res.json();
    dispatch(receiveSongs(data));
}

const songReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_SONGS:
            return {...state, ...action.songs}
        case GET_SONG:
            let nextState = {...state}
            nextState[action.song.song.id] = action.song.song
            return nextState
        default: 
            return state;
    }
}

export default songReducer;