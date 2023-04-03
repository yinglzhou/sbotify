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

const storeCSRFToken = response => {
    const csrfToken = response.headers.get("X-CSRF-Token");
    if (csrfToken) sessionStorage.setItem("X-CSRF-Token", csrfToken);
  }
  
const storeCurrentUser = user => {
    if (user) sessionStorage.setItem("currentUser", JSON.stringify(user));
    else sessionStorage.removeItem("currentUser");
}

export const login = ({ credential, password }) => async dispatch => {
    const response = await csrfFetch("/api/session", {
      method: "POST",
      body: JSON.stringify({ credential, password })
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
  

export const loginUser = user => async dispatch => {
    const res = await csrfFetch('/api/session', {
        method: 'POST',
        body: JSON.stringify(user)
    });
    let data = await res.json();
    sessionStorage.setItem('currentUser', JSON.stringify(data.user));
    storeCurrentUser(data.user)
    dispatch(setUser(data.user));
}

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