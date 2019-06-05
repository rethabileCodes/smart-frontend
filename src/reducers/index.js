import {combineReducers} from 'redux';
import authReducer from './authReducer';
import lockersReducer from './lockersReducer';
import availableLockers from "./availableLockers";

export default combineReducers({
    auth: authReducer,
    lockers:lockersReducer,
    availableLockers
});