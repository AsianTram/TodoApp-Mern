import axios from 'axios';
import {GET_DONE, GET_DONE_ERROR} from './types';

export const getDones= ()=> async dispatch =>{
    try {
        const res= await axios.get('/api/todo/done');
        dispatch({
            type: GET_DONE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_DONE_ERROR,
            payload:{msg: error.response.statusText, status: error.response.status}
        })
    }
        
    
}