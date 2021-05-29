import { combineReducers } from "redux";
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';
import paymentReducer from './reducers/paymentReducer';

export default combineReducers({
    userReducer,
    dataReducer,
    paymentReducer
})