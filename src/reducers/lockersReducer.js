import {FETCH_LOCKERS} from '../actions/types';

export default function(state = false, action){
    switch(action.type){
        case FETCH_LOCKERS:
        return action.payload || false;
         default:
        return state;
    }
}

