import { fakeData } from "../../utilities/fakeData"
import { GET_PROPERTY_DATA, GET_SEARCH_TERM, GET_SPECIFIC_PROPERTY_INFO } from "../types";

export const getPropertyData = () => {

    return async (dispatch) => {
        const data = await fakeData;
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

export const getSpecificPropertyInfo = (id) => {
    return async (dispatch) => {
        const propertyData = await fakeData;
        const specificPropertyInfo = await propertyData.find(data => data.id === id);
        dispatch({
            type: GET_SPECIFIC_PROPERTY_INFO,
            payload: specificPropertyInfo
        })
    }
}