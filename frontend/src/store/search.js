export const GET_SEARCH_RESULTS = 'search/searchResults';
export const CLEAR_SEARCH_RESULTS = 'search/clearSearchResults';


export const receiveSearchResults = searchResults => ({
    type: GET_SEARCH_RESULTS,
    searchResults
});
export const clearSearchResults = () => ({
    type: CLEAR_SEARCH_RESULTS
})

export const fetchSearchResults = (query) => async dispatch => {
    if (query?.trim() !== "") {
        
        const res = await fetch(`/api/songs/search?q=${query}`);
        const data = await res.json();
        dispatch(receiveSearchResults(data));
    } else {
        dispatch(clearSearchResults());
    }
};
const searchReducer = (state = {}, action) => {

    switch (action.type) {
        case GET_SEARCH_RESULTS:
            return {...action.searchResults.search}
        case CLEAR_SEARCH_RESULTS:
            return {}
        default:
            return state;
    }
};
export default searchReducer;