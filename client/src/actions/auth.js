import {LOGIN_SUCCESS, AUTH_ERROR, LOAD_USER, LOG_OUT, CLEAR_TODO, CLEAR_DONE, CLEAR_DUE, SIGNUP_SUCCESS, SIGNUP_ERROR} from './types';
import axios from 'axios';
import {setAlert} from './alert';

export const signup= ({name, email, password, password1})=> async dispatch=>{
    const config= {
        headers:{
            "Content-Type": "application/json"
        }
    };
    const formData=JSON.stringify({name,email,password, password1});
    try {
        const res= await axios.post("/api/user/register", formData, config);
        dispatch({
            type: SIGNUP_SUCCESS,
            payload: res.data
        })
        dispatch(setAlert("Register succeeded!", "success"));

    } catch (error) {
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        dispatch({
            type: SIGNUP_ERROR
        })
        dispatch({
            type: CLEAR_TODO
        })
        dispatch({
            type: CLEAR_DONE
        })
        dispatch({
            type: CLEAR_DUE
        })
    }
}

export const login= ({email, password})=> async dispatch=>{
    const config= {
        headers:{
            "Content-Type": "application/json"
        }
    };
    const formData=JSON.stringify({email,password});
    try {
        const res= await axios.post("/api/user/login", formData, config);
        // dispatch({
        //     type: LOGIN_SUCCESS,
        //     payload: res.data
        // })
        
        dispatch(setAlert("Login succeeded!", "success"));
        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

    } catch (error) {
        const errors = error.response.data.errors;
        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')));
        }
        
        dispatch({
            type: AUTH_ERROR
        })
        dispatch({
            type: CLEAR_TODO
        })
        dispatch({
            type: CLEAR_DONE
        })
        dispatch({
            type: CLEAR_DUE
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
        dispatch({
            type: CLEAR_DONE
        })
        dispatch({
            type: CLEAR_DUE
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
    dispatch({
        type: CLEAR_DONE
    })
    dispatch({
        type: CLEAR_DUE
    })
}