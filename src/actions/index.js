import { SET_USER } from './types';
import { SIGNUP_API_URL, SIGNIN_API_URL } from '../secrets/apikeys';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export function createUser(newUser) {
  return dispatch => {
    fetch(SIGNUP_API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(newUser)
    })
      .then(response => {
        return response.json();
      })
      .then(userData => {
        localStorage.setItem('token', userData.auth_token);
        dispatch(setUser(userData.user));
      });
  };
}

export function setUser(userData) {
  return { type: SET_USER, payload: userData };
}

export function signInUser(userData) {
  return dispatch => {
    fetch(SIGNIN_API_URL, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(userData)
    })
      .then(response => response.json())
      .then(userData => {
        if (userData.error) {
          console.log(userData.error);
        } else {
          localStorage.setItem('token', userData.auth_token);
          dispatch(setUser(userData.user));
        }
      });
  };
}
