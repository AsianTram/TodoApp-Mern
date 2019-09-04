import {GET_DONE, GET_DONE_ERROR, CLEAR_DONE} from '../actions/types';

const initialState={
    dones: null,
    loading: true
}
export default function (state=initialState, action){
    const {type, payload}= action;
    switch(type){
        case GET_DONE:
            return{
                ...state,
                dones: payload,
                loading: false
            }
        case GET_DONE_ERROR:
        case CLEAR_DONE:
            return{
                ...state,
                dones: null,
                loading: false
            }
        default:
            return state
    }
}