import {LOGIN_SUCCESS, AUTH_ERROR, LOAD_USER, LOG_OUT, CLEAR_TODO} from './types';
import axios from 'axios';

export const login= ({email, password})=> async dispatch=>{
    const config= {
        headers:{
            "Content-Type": "application/json"
        }
    };
    const formData=JSON.stringify({email,password});
    try {
        const res= await axios.post("/api/user/login", formData, config);
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    } catch (error) {
        console.log(error);
        dispatch({
            type: AUTH_ERROR
        })
        dispatch({
            type: CLEAR_TODO
        })
    }
}

export const loadUser=()=>async dispatch=>{
    if(localStorage.getItem("token")){
        dispatch({
            type: LOAD_USER
        })
    }
    else{
        dispatch({
            type: AUTH_ERROR
        })
        dispatch({
            type: CLEAR_TODO
        })
    }
}

export const logout=()=>async dispatch=>{
    dispatch({
        type: LOG_OUT
    })
    dispatch({
        type: CLEAR_TODO
    })
}