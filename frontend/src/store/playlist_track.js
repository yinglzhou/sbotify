import csrfFetch from "./csrf";

export const GET_PLAYLIST_TRACKS = 'playlists/getPlaylistTracks';
export const REMOVE_PLAYLIST_TRACK = 'playlists/removePlaylistTrack';
export const ADD_PLAYLIST_TRACK = 'playlists/addPlaylistTrack';

export const receivePlaylistTracks = playlist_tracks => ({
    type: GET_PLAYLIST_TRACKS,
    playlist_tracks
});

export const removePlaylistTrack = playlistTrackId => ({
    type: REMOVE_PLAYLIST_TRACK,
    playlistTrackId
})

export const addPlaylistTrack = playlistTrack => ({
    type: ADD_PLAYLIST_TRACK,
    playlistTrack
})

// playlistTrackData is songId
export const createPlaylistTrack = (playlistId, playlistTrackData) => async dispatch => {
    const res = await csrfFetch(`/api/playlists/${playlistId}/playlist_tracks`, {
        method: 'POST',
        body: JSON.stringify(playlistTrackData),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await res.json();
    dispatch(addPlaylistTrack(data));
}



export const fetchPlaylistTracks = (playlistId) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlistId}`);
    const data = await res.json();
    dispatch(receivePlaylistTracks(data.playlistTracks));
}

export const deletePlaylistTrack = (playlistId, playlistTrackId) => async dispatch => {
    const res = await csrfFetch(`/api/playlists/${playlistId}/playlist_tracks/${playlistTrackId}`, {
        method: 'DELETE'
    });
    dispatch(removePlaylistTrack(playlistTrackId));
}
const playlistTrackReducer = (state={}, action) => {
    const nextState = {...state}
    switch (action.type) {
        case GET_PLAYLIST_TRACKS:
            return {...action.playlist_tracks}
        case REMOVE_PLAYLIST_TRACK:
            delete nextState[action.playlistTrackId];
            return nextState;
        default:
            return state;
    }
}

export default playlistTrackReducer;
