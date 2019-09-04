import axios from 'axios';
import {GET_TODO, GET_TODO_ERROR} from './types';

export const getTodos= ()=> async dispatch =>{
    try {
        const res= await axios.get('/api/todo/');
        dispatch({
            type: GET_TODO,
            payload: res.data
        })
    } catch (error) {
        dispatch({
            type: GET_TODO_ERROR,
            payload:{msg: error.response.statusText, status: error.response.status}
        })
    }
        
    
}