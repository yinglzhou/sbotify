const SET_LOGIN_MODAL_STATUS = 'ui/setLoginModalStatus';


const loginModalStatus = (boolean) => ({
    type: SET_LOGIN_MODAL_STATUS,
    boolean
})

export const setLoginModalStatus = boolean => async dispatch => {
    dispatch(loginModalStatus(boolean))
}

const uiReducer = (state={}, action) => {
    switch (action.type) {
        case SET_LOGIN_MODAL_STATUS:
            return { ...state, showLoginModal: action.boolean}
        default:
            return state;
    }
};

export default uiReducer;