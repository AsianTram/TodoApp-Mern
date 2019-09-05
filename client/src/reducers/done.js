import {GET_DONE, GET_DONE_ERROR, CLEAR_DONE, CHECK_DONE, DELETE_DONE, DELETE_DONE_ERROR} from '../actions/types';

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
        case CHECK_DONE:
                return{
                    ...state,
                    done: [payload, ...state.dones],
                    loading: false
                }
        case DELETE_DONE:
                return{
                    ...state,
                    dones: state.dones.filter(done=> done._id!==payload._id),
                    loading: false
                }
        default:
        case DELETE_DONE_ERROR:
            return state
    }
}