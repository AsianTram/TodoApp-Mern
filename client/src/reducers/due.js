import {GET_DUE, GET_DUE_ERROR, CLEAR_DUE, DELETE_DUE, DELETE_DUE_ERROR} from '../actions/types';

const initialState={
    dues: null,
    loading: true
}
export default function (state=initialState, action){
    const {type, payload}= action;
    switch(type){
        case GET_DUE:
            return{
                ...state,
                dues: payload,
                loading: false
            }
        case GET_DUE_ERROR:
        case CLEAR_DUE:
            return{
                ...state,
                dues: null,
                loading: false
            }
        case DELETE_DUE:
        return{
            ...state,
            dues: state.dues.filter(due=> due._id!==payload._id),
            loading: false
        }
        default:
        case DELETE_DUE_ERROR:
            return state
    }
}