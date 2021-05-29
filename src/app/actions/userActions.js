import { ERROR_MESSAGE, IS_LOGIN, USER_INFO, LOADING_FOR_LOGIN } from "../types"

export const getUserInfo = () => {
    return async dispatch => {
        const userInfo = await sessionStorage.getItem('abode/user');
        const user = await JSON.parse(userInfo);
        dispatch({
            type: USER_INFO,
            payload: user
        })
    }
}

export const isLogin = (bool) => {
    return {
        type: IS_LOGIN,
        payload: bool
    }
}

export const getErrorMessage = (message) => {
    return {
        type: ERROR_MESSAGE,
        payload: message
    }
}

export const loginLoading = (bool) => {
    return {
        type: LOADING_FOR_LOGIN,
        payload: bool
    }
}