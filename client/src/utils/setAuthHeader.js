import axios from 'axios';

export const setAuthHeader = async()=>{
    if(localStorage.getItem('token')){
    return axios.defaults.headers.common['x-auth-token']=localStorage.getItem('token');
    }
    return delete axios.defaults.headers.commom['x-auth-token'];
}