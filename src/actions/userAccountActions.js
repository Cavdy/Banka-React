import axios from '../config/axoisInstance';
import {
  USER_ACCOUNTS,
  USER_SPECIFIC_ACCOUNT,
  GET_ERRORS,
  CREATE_ACCOUNT
} from './types';

export const getUserAccounts = (email) => (dispatch) => {
  axios.get(`/users/${email}/accounts`, { headers: { Authorization: `Bearer ${sessionStorage.token}` } })
    .then(res => {
      dispatch({
        type: USER_ACCOUNTS,
        payload: res.data.data
      })
    })
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data
    }));
};

export const getAccount = (account) => (dispatch) => {
  axios.get(`/accounts/${account}`, { headers: { Authorization: `Bearer ${sessionStorage.token}` } })
    .then(res => dispatch({
      type: USER_SPECIFIC_ACCOUNT,
      payload: res.data.data
    }))
    .catch(err => console.log(err));
};

export const createAccount = (accountType) => (dispatch) => {
  axios.post('/accounts', accountType, { headers: { Authorization: `Bearer ${sessionStorage.token}` } })
    .then(res => dispatch({
      type: CREATE_ACCOUNT,
      payload: res.data.data
    }))
    .catch(err => console.log(err));
};
