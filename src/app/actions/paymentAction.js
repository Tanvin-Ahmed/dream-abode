import { CARD_COMPLETE, GET_BILLING_DETAILS, GET_PAYMENT_ERROR, GET_PAYMENT_METHOD, STRIPE_PROCESSING, TOTAL_BUY } from "../types"

export const setBillingDetails = (payload) => {
    return {
        type: GET_BILLING_DETAILS,
        payload
    }
}

export const setPaymentMethod = (payload) => {
    return {
        type: GET_PAYMENT_METHOD,
        payload
    }
}

export const setProcessing = (payload) => {
    return {
        type: STRIPE_PROCESSING,
        payload
    }
}

export const setCardComplete = (payload) => {
    return {
        type: CARD_COMPLETE,
        payload
    }
}

export const setError = (payload) => {
    return {
        type: GET_PAYMENT_ERROR,
        payload
    }
}

export const setTotalBuy = (payload) => {
    return {
        type: TOTAL_BUY,
        payload
    }
}