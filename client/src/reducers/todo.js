import {GET_TODO, GET_TODO_ERROR, CLEAR_TODO, ADD_TODO, ADD_TODO_ERROR, CHECK_DONE, CHECK_DONE_ERROR, DELETE_TODO, DELETE_TODO_ERROR} from '../actions/types';

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
        case ADD_TODO:
            return{
                ...state,
                todos: [...state.todos, payload],
                loading: false
            }
        case CHECK_DONE:
            return{
                ...state,
                todos: state.todos.filter(todo=> todo._id!==payload._id),
                loading: false
            }
        case DELETE_TODO:
            return{
                ...state,
                todos: state.todos.filter(todo=> todo._id!==payload._id),
                loading: false
            }
        default:
        case ADD_TODO_ERROR:
        case CHECK_DONE_ERROR:
        case DELETE_TODO_ERROR:
            return state
    }
}