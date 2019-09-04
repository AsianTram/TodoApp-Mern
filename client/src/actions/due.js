import axios from 'axios';
import {GET_DUE, GET_DUE_ERROR} from './types';

export const getDues= ()=> async dispatch =>{
    try {
        const res= await axios.get('/api/todo/due');
        dispatch({
            type: GET_DUE,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_DUE_ERROR,
            payload:{msg: error.response.statusText, status: error.response.status}
        })
    }
        
    
}