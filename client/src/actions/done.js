import axios from 'axios';
import {GET_DONE, GET_DONE_ERROR, DELETE_DONE, DELETE_DONE_ERROR} from './types';
import { setAlert } from './alert';

export const getDones= ()=> async dispatch =>{
    try {
        const res= await axios.get('/api/todo/done');
        // console.log("Here");
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

export const deleteTask_Done= (taskid)=> async dispatch =>{
    try {
        const res= await axios.delete(`/api/todo/delete/${taskid}`);
        dispatch({
            type: DELETE_DONE,
            payload: res.data
        })
        dispatch(setAlert("Deletion succeeded", "success"));
    } catch (error) {
        dispatch({
            type: DELETE_DONE_ERROR
                })
    }
        
    
}
