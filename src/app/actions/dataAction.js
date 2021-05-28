import { fakeData } from "../../utilities/fakeData"
import { GET_PROPERTY_DATA, GET_SEARCH_TERM } from "../types";

export const getPropertyData = () => {

    return async (dispatch) => {
        const data = await fakeData;
        console.log(data);
        dispatch({
            type: GET_PROPERTY_DATA,
            payload: data
        })
    }
}

export const getSearchTerm = (term) => {
    return {
        type: GET_SEARCH_TERM,
        payload: term
    }
}