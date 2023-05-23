const SET_LOGIN_MODAL_STATUS = 'ui/setLoginModalStatus';
const SET_LOGIN_MODAL_PIC = 'ui/setLoginModalPic';

const loginModalStatus = (boolean) => ({
    type: SET_LOGIN_MODAL_STATUS,
    boolean
})
const loginModalPic = (coverPic) => ({
    type: SET_LOGIN_MODAL_PIC,
    coverPic
})
export const setLoginModalStatus = boolean => async dispatch => {
    dispatch(loginModalStatus(boolean))
}
export const setLoginModalPic = pic => async dispatch => {
    dispatch(loginModalPic(pic))
}

const uiReducer = (state={}, action) => {
    switch (action.type) {
        case SET_LOGIN_MODAL_STATUS:
            return { ...state, showLoginModal: action.boolean}
        case SET_LOGIN_MODAL_PIC:
        return {...state, loginModalPic: action.coverPic}
        default:
            return state;
    }
};

export default uiReducer;