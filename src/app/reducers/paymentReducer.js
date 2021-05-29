import { CARD_COMPLETE, GET_BILLING_DETAILS, GET_PAYMENT_ERROR, GET_PAYMENT_METHOD, STRIPE_PROCESSING, TOTAL_BUY } from "../types"

const initialState = {
    billingDetails: {},
    paymentMethod: null,
    processing: false,
    cardComplete: false,
    error: null,
    totalBuy: [],
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_BILLING_DETAILS: 
            return {
                ...state,
                billingDetails: action.payload
            }

        case GET_PAYMENT_METHOD:
            return {
                ...state,
                paymentMethod: action.payload
            }

        case STRIPE_PROCESSING:
            return {
                ...state,
                processing: action.payload
            }

        case CARD_COMPLETE:
            return {
                ...state,
                cardComplete: action.payload
            }

        case GET_PAYMENT_ERROR:
            return {
                ...state,
                error: action.payload
            }
        
        case TOTAL_BUY:
            return {
                ...state,
                totalBuy: [...state.totalBuy, action.payload]
            }
        
        default: return state
    }
}