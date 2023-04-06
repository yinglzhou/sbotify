import csrfFetch from "./csrf";


/* ------- ACTION TYPES ------- */
const SET_CURRENT_USER = 'session/setUser';
const REMOVE_CURRENT_USER = 'session/removeUser';

/* ------- ACTION CREATORS ------- */
const setUser = (user) => ({
    type: SET_CURRENT_USER,
    payload: user
})

const removeUser = () => ({
    type: REMOVE_CURRENT_USER
})

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
  }
  
const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}

  export const login = ({ email, password }) => async dispatch => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setUser(data.user));
    return response;
  };
  
  export const restoreSession = () => async dispatch => {
    const response = await csrfFetch("/api/session");
    storeCSRFToken(response);
    const data = await response.json();
    storeCurrentUser(data.user);
    dispatch(setUser(data.user));
    return response;
  };


export const signup = user => async dispatch => {
    const { name, email, password } = user;
    const res = await csrfFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({
            name,
            email,
            password
        })
    });
    const data = await res.json();
    storeCurrentUser(data.user);
    dispatch(setUser(data.user))
    return res;
}

export const logout = () => async (dispatch) => {
  const response = await csrfFetch("/api/session", {
    method: "DELETE"
  });
  storeCurrentUser(null);
  dispatch(removeUser());
  return response;
};

const initialState = {
  user: JSON.parse(sessionStorage.getItem("currentUser"))
}

const sessionReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CURRENT_USER:
        return { ...state, user: action.payload };
      case REMOVE_CURRENT_USER:
        return { ...state, user: null };
      default:
        return state;
    }
};

  export default sessionReducer;