import axios from '../config/axoisInstance';
import {
  GET_ERRORS, SEND_VERIFY_TOKEN, CURRENT_USER, NOT_VALIDATED, VALIDATED
} from './types';

export const registerUser = (userData) => (dispatch) => {
  axios.post('/auth/signup', userData)
    .then(res => dispatch({
      type: SEND_VERIFY_TOKEN,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data.data
    }));
};

export const loginUser = (userData) => (dispatch) => {
  axios.post('/auth/signin', userData)
    .then(res => {
      const response = res.data.data;
      if (response.user) {
        dispatch({
          type: CURRENT_USER,
          payload: response.user
        })
      }
    })
    .catch(err => {
      const response = err.response.data.data;
      if (response.notValid) {
        dispatch({
          type: NOT_VALIDATED,
          payload: response.notValid
        })
      } else {
        dispatch({
          type: GET_ERRORS,
          payload: response
        })
      }
    });
};

export const validateToken = (secretToken) => (dispatch) => {
  axios.patch(`/auth/verify/${secretToken}`)
    .then(res => {
      dispatch({
        type: VALIDATED,
        payload: res.data.data
      })
    })
    .catch(err => {
      dispatch({
        type: NOT_VALIDATED,
        payload: err.response.data.data
      })
    });
};