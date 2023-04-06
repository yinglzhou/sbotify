 
const GET_ALBUMS = 'albums/getAlbums';
const GET_ALBUM = 'albums/getAlbum';

const receiveAlbums = albums => ({
    type: GET_ALBUMS,
    albums
});

const receiveAlbum = album => ({
    type: GET_ALBUM,
    album
});

// thunk action creator
export const fetchAllAlbums = () => async dispatch => {
    const res = await fetch('/api/albums');
    const data = await res.json();
    // console.log(data);
    // const x = 
    dispatch(receiveAlbums(data));
    // console.log(x)
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