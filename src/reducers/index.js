import {combineReducers} from 'redux';
import authReducer from './authReducer';
import lockersReducer from './lockersReducer';
import availableLockers from "./availableLockers";
import myLockers from "./myLockers.js"
import reservedLockers from "./reservedLockers";

export default combineReducers({
    auth: authReducer,
    lockers:lockersReducer,
    availableLockers,
    myLockers,
    reservedLockers
});