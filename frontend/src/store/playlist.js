
export const GET_PLAYLISTS = 'playlists/getPlaylists';
export const GET_PLAYLIST = 'playlists/getPlaylist';

export const receivePlaylists = playlists => ({
    type: GET_PLAYLISTS,
    playlists
});

export const receivePlaylist = playlist => ({
    type: GET_PLAYLIST,
    playlist
});

export const fetchAllPlaylists = () => async dispatch => {
    const res = await fetch('/api/playlists');
    const data = await res.json();
    dispatch(receivePlaylists(data))
};

export const fetchPlaylist = (playlistId) => async dispatch => {
    const res = await fetch(`/api/albums/${playlistId}`);
    const data = await res.json();
    dispatch(receivePlaylist(data))
};

const playlistReducer = (state={}, action) => {
    switch (action.type) {
        case GET_PLAYLISTS:
            return {...state, ...action.playlists}
        case GET_PLAYLIST:
            let nextState = {...state}
            nextState[action.playlist.id] = action.playlist
            return nextState
        default:
            return state;
    }
};

export default playlistReducer;
