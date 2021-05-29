import { ERROR_MESSAGE, IS_LOGIN, LOADING_FOR_LOGIN, USER_INFO } from "../types"

const initialState = {
    userInfo: {},
    isLogin: true,
    errorMessage:'',
    loading: false
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO: 
            return {
                ...state,
                userInfo: action.payload
            }

        case IS_LOGIN: 
            return { 
                ...state,
                isLogin: action.payload
            }

        case ERROR_MESSAGE:
            return {
                ...state,
                errorMessage: action.payload
            }

        case LOADING_FOR_LOGIN:
            return {
                ...state,
                loading: action.payload
            }

        default: return state;
    }
}