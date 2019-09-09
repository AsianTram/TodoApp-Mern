import {SET_ALERT, CLEAR_ALERT} from './types';
import uuid from 'uuid';

export const setAlert=(alertText, alertType)=>dispatch =>{
    const id = uuid.v4();
    dispatch({
        type: SET_ALERT,
        payload: {alertType, alertText, id}
    })
    setTimeout(()=> dispatch({
        type: CLEAR_ALERT,
        payload: id
    }), 5000)
}