import { GET_PROPERTY_DATA, GET_SEARCH_TERM } from "../types"

const initialState = {
    propertyData: [],
    searchTerm: '',
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_PROPERTY_DATA:
            return {
                ...state,
                propertyData: action.payload
            } 

        case GET_SEARCH_TERM: 
            return {
                ...state,
                searchTerm: action.payload
            }

        default: return state
    }
}