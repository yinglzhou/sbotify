export const GET_PLAYLIST_TRACKS = 'playlists/getPlaylistTracks';

export const receivePlaylistTracks = playlist_tracks => ({
    type: GET_PLAYLIST_TRACKS,
    playlist_tracks
});

export const fetchPlaylistTracks = (playlistId) => async dispatch => {
    const res = await fetch(`/api/playlists/${playlistId}`);
    const data = await res.json();
    dispatch(receivePlaylistTracks(data.playlistTracks));
}

const playlistTrackReducer = (state={}, action) => {
    switch (action.type) {
        case GET_PLAYLIST_TRACKS:
            return {...action.playlist_tracks}
        default:
            return state;
    }
}

export default playlistTrackReducer;
