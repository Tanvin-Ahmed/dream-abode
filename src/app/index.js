import { combineReducers } from "redux";
import userReducer from './reducers/userReducer';
import dataReducer from './reducers/dataReducer';

export default combineReducers({
    userReducer,
    dataReducer
})