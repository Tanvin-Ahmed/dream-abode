import { GET_PROPERTY_DATA, GET_SEARCH_TERM, GET_SPECIFIC_PROPERTY_INFO } from "../types"

const initialState = {
    propertyData: [],
    searchTerm: '',
    specificPropertyInfo: {},
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

        case GET_SPECIFIC_PROPERTY_INFO: 
            return {
                ...state,
                specificPropertyInfo: action.payload
            }

        default: return state
    }
}