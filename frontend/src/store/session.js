import csrfFetch from "./csrf";

const initialState = {
    // user: JSON.parse(sessionStorage.getItem("currentUser"))
    user: null
}

/* ------- ACTION TYPES ------- */
const SET_CURRENT_USER = 'session/SET_CURRENT_USER';
const REMOVE_CURRENT_USER = 'session/REMOVE_CURRENT_USER';

/* ------- ACTION CREATORS ------- */
export const setUser = (user) => ({
    type: SET_CURRENT_USER,
    user
})

export const removeUser = (userId) => ({
    type: REMOVE_CURRENT_USER,
    userId
})

export const loginUser = user => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    let data = await res.json();
    // sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    // storeCurrentUser(data.user)
    dispatch(setUser(data.user));
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...state, user: action.user };
      case REMOVE_CURRENT_USER:
        return { ...state, user: null };
      default:
        return state;
    }
  };

  export default sessionReducer;