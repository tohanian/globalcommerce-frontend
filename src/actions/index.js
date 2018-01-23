import {
  SIGNUP_API_URL,
  SIGNIN_API_URL,
  AUTH_API_URL,
  LIKES_API_URL
} from '../secrets/apikeys';

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

const authHeaders = Object.assign({}, headers, {
  Authorization: localStorage.token
});

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
  return dispatch => {
    fetch(AUTH_API_URL, {
      METHOD: 'GET',
      headers: authHeaders
    })
      .then(response => response.json())
      .then(userData => dispatch(setUser(userData)));
  };
}

export function setUser(userData) {
  let signedInUser = { ...userData.user };
  signedInUser.likes = [...userData.likes];
  return { type: 'SET_USER', payload: signedInUser };
}

export function authError(error) {
  return { type: 'AUTH_ERROR', error: error };
}

export function logoutUser() {
  localStorage.removeItem('token');
  return { type: 'LOGOUT_USER' };
}

export function setHoverListingCard(mlsId) {
  return { type: 'SET_HOVER_LISTING_CARD', mlsId: mlsId };
}

export function unsetHoverListingCard() {
  return { type: 'UNSET_HOVER_LISTING_CARD' };
}

export function addLike(mlsId) {
  console.log(mlsId);
  fetch(LIKES_API_URL, {
    method: 'POST',
    headers: authHeaders,
    body: JSON.stringify({ mlsId: mlsId })
  });
  return { type: 'ADD_LIKE', mlsId: mlsId };
}

export function getUserLikes() {}
