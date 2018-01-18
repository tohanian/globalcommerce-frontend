// import { CREATE_USER } from './types';
import { SIGNUP_API_URL } from '../secrets/apikeys';

export function createUser(newUser) {
  // console.log(newUser);
  // debugger;
  return dispatch => {
    fetch(SIGNUP_API_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(userData => {
        console.log(userData);
        localStorage.setItem('token', userData.auth_token);
        dispatch(setUser(userData.user));
      });
  };
}

export function setUser(userData) {
  debugger;
  return { type: 'SET_USER', payload: userData };
}
