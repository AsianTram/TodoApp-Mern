import axios from 'axios';
import {GET_TODO, GET_TODO_ERROR, ADD_TODO, ADD_TODO_ERROR, CHECK_DONE, CHECK_DONE_ERROR, DELETE_TODO, DELETE_TODO_ERROR} from './types';
import { setAlert } from './alert';


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

export const addTodo= ({task, location, duedate, description})=> async dispatch=>{
    const config= {
        headers:{
            "Content-Type": "application/json"
        }
    };
    const formData=JSON.stringify({task, location, duedate, description});
    try {
        const res= await axios.post("/api/todo/", formData, config);
        dispatch({
            type: ADD_TODO,
            payload: res.data
        })
        dispatch(setAlert("Adding succeeded", "success"));

    } catch (error) {
        console.log(error);
        dispatch({
            type: ADD_TODO_ERROR
        })
        
    }
}

export const checkDone= (taskid)=> async dispatch =>{
    try {
        const res= await axios.put(`/api/todo/done/${taskid}`);
        dispatch({
            type: CHECK_DONE,
            payload: res.data
        })
        dispatch(setAlert("Check Done succeeded", "success"));
    } catch (error) {
        dispatch({
            type: CHECK_DONE_ERROR
                })
    }
        
    
}

export const deleteTask_Todo= (taskid)=> async dispatch =>{
    try {
        const res= await axios.delete(`/api/todo/delete/${taskid}`);
        dispatch({
            type: DELETE_TODO,
            payload: res.data
        })
        dispatch(setAlert("Deletion succeeded", "success"));
    } catch (error) {
        dispatch({
            type: DELETE_TODO_ERROR
                })
    }
        
    
}
