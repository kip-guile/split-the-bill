import * as types from './actionTypes'
import AxiosAuth from "../AxiosAuth/AxiosAuth";


const splitsApi = 'https://split-the-bill-api.herokuapp.com/api/users/profile';

export const addUsers = (users) => ({
    type: types.ADD_USERS,
    payload: users,
})

export const currentUser = (user) => ({
    type: types.ADD_CURRENT_USER,
    payload: user,
})

export const getBills = () => dispatch => {
    AxiosAuth().get(splitsApi)
        .then(res => {
            const splitsAray = res.data.user.bills;
            dispatch({type: types.ADD_BILLS, payload: splitsAray});
        })
        .catch(error => {
            console.log(error.message);
        })
}

export function increment(){
    return {type: types.INCREMENT}
}

export function decrement (){
    return {type: types.DECREMENT}
}

export function reset(){
    return {type: types.RESET}
}