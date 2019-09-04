import {LOGIN_SUCCESS, AUTH_ERROR, LOAD_USER, LOG_OUT} from '../actions/types';

const initialState={
    isAuthenticate: false,
    token: localStorage.getItem("token"),
    loading: true
};

export default function (state=initialState, action){
    const {type, payload}= action;

    switch(type){
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return{
                ...state,
                isAuthenticate: true,
                loading: false
            }
        case LOAD_USER:
                return{
                    ...state,
                    isAuthenticate: true,
                    loading: false
                }
        case AUTH_ERROR:
        case LOG_OUT:
            localStorage.removeItem("token");
            return{
                ...state,
                token: null,
                isAuthenticate: false,
                loading: false
            }
        default: 
            return state;
    }
}