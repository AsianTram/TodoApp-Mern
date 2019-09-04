import {GET_TODO, GET_TODO_ERROR, CLEAR_TODO} from '../actions/types';

const initialState={
    todos: null,
    loading: true
}
export default function (state=initialState, action){
    const {type, payload}= action;
    switch(type){
        case GET_TODO:
            return{
                ...state,
                todos: payload,
                loading: false
            }
        case GET_TODO_ERROR:
        case CLEAR_TODO:
            return{
                ...state,
                todos: null,
                loading: false
            }
        default:
            return state
    }
}