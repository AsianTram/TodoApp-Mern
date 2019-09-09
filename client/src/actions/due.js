import axios from 'axios';
import {GET_DUE, GET_DUE_ERROR, DELETE_DUE, DELETE_DUE_ERROR} from './types';
import { setAlert } from './alert';


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

export const deleteTask_Due= (taskid)=> async dispatch =>{
    try {
        const res= await axios.delete(`/api/todo/delete/${taskid}`);
        dispatch({
            type: DELETE_DUE,
            payload: res.data
        })
        dispatch(setAlert("Deletion succeeded", "success"));

    } catch (error) {
        dispatch({
            type: DELETE_DUE_ERROR
                })
    }
        
    
}
