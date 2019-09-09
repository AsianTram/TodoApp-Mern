import {combineReducers} from 'redux';
import auth from './auth';
import todo from './todo';
import done from './done';
import due from './due';
import alert from './alert';

export default combineReducers({auth, todo, done, due, alert});