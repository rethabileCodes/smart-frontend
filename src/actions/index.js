
import { FETCH_USER, FETCH_LOCKERS, FETCH_AVAILABLE_LOCKERS, FETCH_RESERVED_LOCKERS, FETCH_MY_LOCKERS} from './types';


export const  fetchUser =  () => async dispatch => {
    const res = await fetch("https://smart-locker-backend.herokuapp.com/api/auth/me",{
      
    headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' },
             credentials: 'include', 
             method: 'GET',
             
             
 });
    const data = await res.json();
    console.log('return FETCH_USER', data);
    dispatch({type: FETCH_USER, payload: data.message ? false: data});

};

export const  fetchLockers =  () => async dispatch => {
    const res = await fetch("https://smart-locker-backend.herokuapp.com/api/locker",{
      
    headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' },
             credentials: 'include', 
             method: 'GET',
             
             
 });
    const data = await res.json();
    console.log('return FETCH_LOCKERS', data);
    dispatch({type: FETCH_LOCKERS, payload: data.message ? false: data});

};

export const  fetchAvailableLockers =  () => async dispatch => {
    const res = await fetch("https://smart-locker-backend.herokuapp.com/api/locker",{
      
    headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' },
             credentials: 'include', 
             method: 'GET'
             
 });
    const data = await res.json();
    console.log('return FETCH_AVAILABLE_LOCKERS', data);
    dispatch({type: FETCH_AVAILABLE_LOCKERS, payload: data.message ? false: data});

};

export const  fetchReservedLockers =  () => async dispatch => {
    const res = await fetch("https://smart-locker-backend.herokuapp.com/api/locker",{
      
    headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' },
             credentials: 'include', 
             method: 'GET'
             
 });
    const data = await res.json();
    console.log('return FETCH_AVAILABLE_LOCKERS', data);
    dispatch({type: FETCH_RESERVED_LOCKERS, payload: data.message ? false: data});

};

export const  fetchMyLockers =  () => async dispatch => {
    const res = await fetch("https://smart-locker-backend.herokuapp.com/api/locker",{
      
    headers: { 
            'Accept': 'application/json', 
            'Content-Type': 'application/json' },
             credentials: 'include', 
             method: 'GET'
             
 });
    const data = await res.json();
    console.log('return FETCH_AVAILABLE_LOCKERS', data);
    dispatch({type: FETCH_MY_LOCKERS, payload: data.message ? false: data});

};



