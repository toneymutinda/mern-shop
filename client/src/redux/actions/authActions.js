import api from '../../api';
import setAuthToken from '../../utils/setAuthToken';
import jwt_decode from 'jwt-decode';

import { GET_ERRORS, USER_LOADING, SET_CURRENT_USER, USER_NOT_LOADING } from './types';

// register a user
export const registerUser = (userData, history) => dispatch => {
    dispatch(setUserLoading());
    api.post("users/register", userData)
         .then((res) => {
             // set laoding to false
             dispatch(setUserNotLoading());
             history.push("/")
         })
         .catch((err) => {
             // set loading to false
             dispatch(setUserNotLoading());
             dispatch({
                 type: GET_ERRORS,
                 payload: err.response.data
             })
         });
}

// login a user
export const loginUser = userData => dispatch => {
    dispatch(setUserLoading());
    api.post("users/login", userData)
         .then((res) => {
             // set loading to false
             dispatch(setUserNotLoading());
             const { token } = res.data;
             localStorage.setItem("jwtToken", token);

             setAuthToken(token);
             const decoded = jwt_decode(token);
             dispatch(setCurrentUser(decoded));
         })
         .catch((err) => {
             // set loading to false
             dispatch(setUserNotLoading());
             dispatch({
                 type: GET_ERRORS,
                 payload: err.response.data
             })
         });
}

// set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// user loading
export const setUserLoading = () => {
    return {
        type: USER_LOADING
    }
}

// user loading
export const setUserNotLoading = () => {
    return {
        type: USER_NOT_LOADING
    }
}

// logout user
export const logoutUser = () => dispatch => {
    localStorage.removeItem("jwtToken");

    // remove auth header from requests
    setAuthToken(false);
    dispatch(setCurrentUser({}));
}

