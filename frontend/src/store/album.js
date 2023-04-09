import { receiveArtists } from "./artist";
export const GET_ALBUMS = 'albums/getAlbums';
export const GET_ALBUM = 'albums/getAlbum';

export const receiveAlbums = albums => ({
    type: GET_ALBUMS,
    albums
});

export const receiveAlbum = album => ({
    type: GET_ALBUM,
    album
});

// thunk action creator
export const fetchAllAlbums = () => async dispatch => {
    const res = await fetch('/api/albums');
    const data = await res.json();
    console.log(data)
    dispatch(receiveAlbums(data.albums));
    dispatch(receiveArtists(data.artists));
};


export const fetchAlbum = (albumId) => async dispatch => {
    const res = await fetch(`/api/albums/${albumId}`);
    const data = await res.json();
    // console.log(data)
    dispatch(receiveAlbum(data))
};
const albumReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALBUMS:
            return {...state, ...action.albums}
        case GET_ALBUM:
            let nextState = {...state}
            nextState[action.album.album.id] = action.album.album
            return nextState
        default: 
            return state;
    }
};
export default albumReducer;