import {FETCH_AVAILABLE_LOCKERS} from '../actions/types';


function filter(list){
    return list.filter( e => e.isReserved != true)
}

export default function(state = false, action){
    switch(action.type){
        case FETCH_AVAILABLE_LOCKERS:
        return filter(action.payload )|| false;
         default:
        return state;
    }
}

