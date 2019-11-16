import {combineReducers} from 'redux';
import counterReducer from "./counterReducer";
import usersReducer from './usersReducer';


const rootReducer = combineReducers({
    count: counterReducer,
    lumpstate: usersReducer
});

export default rootReducer;