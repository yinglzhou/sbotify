import csrfFetch from "./csrf";
import { receivePlaylistTracks } from "./playlist_track";

export const GET_PLAYLISTS = 'playlists/getPlaylists';
export const GET_PLAYLIST = 'playlists/getPlaylist';
export const REMOVE_PLAYLIST = 'playlists/removePlaylist';
export const SET_PLAYLIST = 'playlist/setPlaylist';

export const setPlaylist = playlist => ({
  type: SET_PLAYLIST,
  playlist
});

export const receivePlaylists = playlists => ({
    type: GET_PLAYLISTS,
    playlists
});

export const receivePlaylist = playlist => ({
    type: GET_PLAYLIST,
    playlist
});

export const removePlaylist = playlistId => ({
    type: REMOVE_PLAYLIST,
    playlistId
});

export const createPlaylist = (playlist) => async dispatch => {
    const res = await csrfFetch('/api/playlists', {
        method: 'POST',
        body: JSON.stringify(playlist),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    });

    const data = await res.json();
    dispatch(receivePlaylist(data))
};
export const updatePlaylist = (playlistId, updatedPlaylist) => async dispatch => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`, {
        method:'PATCH',
        body: JSON.stringify(updatedPlaylist),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    dispatch(setPlaylist(data));
    return data
}

export const deletePlaylist = (playlistId) => async dispatch => {
    const res = await csrfFetch(`/api/playlists/${playlistId}`, {
        method: 'DELETE'
    });
    dispatch(removePlaylist(playlistId));
}

export const fetchAllPlaylists = () => async dispatch => {
    const res = await fetch('/api/playlists');
    const data = await res.json();
    dispatch(receivePlaylists(data))
};

export const fetchPlaylist = (playlistId) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlistId}`);
    const data = await res.json();

    dispatch(receivePlaylist(data.playlist));
    dispatch(receivePlaylistTracks(data.playlistTracks))
};

const playlistReducer = (state={}, action) => {
    const nextState = {...state}
    switch (action.type) {
        case GET_PLAYLISTS:
            return {...state, ...action.playlists}
        case GET_PLAYLIST:
            nextState['playlist'] = action.playlist
            return nextState
        case SET_PLAYLIST:
            return {...state, [action.playlist.id]: action.playlist};
        case REMOVE_PLAYLIST:
            delete nextState[action.playlistId];
            return nextState;
        default:
            return state;
    }
};

export default playlistReducer;
