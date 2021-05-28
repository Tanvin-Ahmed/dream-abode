import { USER_INFO } from "../types"

const initialState = {
    userInfo: {},
}

export default (state = initialState, action) => {
    switch (action.type) {
        case USER_INFO: 
            return {
                ...state,
                userInfo: action.payload
            }

        default: return state;
    }
}