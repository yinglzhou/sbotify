
const GET_ARTISTS = 'artists/getArtists';
const GET_ARTIST = 'artists/getArtist';

const receiveArtists = artists => ({
    type: GET_ARTISTS,
    artists
});

const receiveArtist = artist => ({
    type: GET_ARTIST,
    artist
});


export const fetchAllArtists = () => async dispatch => {
    const res = await fetch('api/artists');
    const data = await res.json();
    dispatch(receiveArtists(data));
}

export const fetchArtist = (artistId) => async dispatch => {
    const res = await fetch(`/api/artists/${artistId}`);
    const data = await res.json();
    // console.log(data)
    dispatch(receiveArtist(data));
}

const artistReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ARTISTS:
            return {...state, ...action.artists}
        case GET_ARTIST:
            let newState = {...state}
            debugger
            newState[action.artist.artist.id] = action.artist.artist
            return newState
        default:
            return state;
    }
}

export default artistReducer;
