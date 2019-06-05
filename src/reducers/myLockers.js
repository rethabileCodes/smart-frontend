import {FETCH_MY_LOCKERS} from '../actions/types';



export default function(state = false, action){
    switch(action.type){
        case FETCH_MY_LOCKERS:
        return action.payload || false;
         default:
        return state;
    }
}

