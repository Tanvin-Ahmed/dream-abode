import { USER_INFO } from "../types"

export const getUserInfo = (user) => {
    return {
        type: USER_INFO,
        payload: user
    }
}