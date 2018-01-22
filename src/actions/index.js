import {
  SIGNUP_API_URL,
  SIGNIN_API_URL,
  AUTH_API_URL
} from '../secrets/apikeys';

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
          dispatch(authError(userData.error));
        } else {
          localStorage.setItem('token', userData.auth_token);
          dispatch(setUser(userData.user));
        }
      });
  };
}

export function getUser() {
  console.log(
    'headers',
    Object.assign({}, headers, { Authorization: localStorage.token })
  );
  return dispatch => {
    fetch(AUTH_API_URL, {
      METHOD: 'GET',
      headers: Object.assign({}, headers, { Authorization: localStorage.token })
    })
      .then(response => response.json())
      .then(userData => dispatch(setUser(userData)));
  };
}

export function setUser(userData) {
  return { type: 'SET_USER', payload: userData };
}

export function authError(error) {
  return { type: 'AUTH_ERROR', error: error };
}

export function logoutUser() {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
}
