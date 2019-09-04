import {GET_DUE, GET_DUE_ERROR, CLEAR_DUE} from '../actions/types';

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
        default:
            return state
    }
}