import axios from '../config/axoisInstance';
import {
  USER_ACCOUNTS,
  USER_SPECIFIC_ACCOUNT,
  GET_USER_ERROR,
  CREATE_ACCOUNT,
  USER_TRANSACTIONS,
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
      type: GET_USER_ERROR,
      payload: err.response.data
    }));
};

export const getAccount = (account) => (dispatch) => {
  axios.get(`/accounts/${account}`, { headers: { Authorization: `Bearer ${sessionStorage.token}` } })
    .then(res => dispatch({
      type: USER_SPECIFIC_ACCOUNT,
      payload: res.data.data
    }))
    .catch(err => err);
};

export const createAccount = (accountType) => (dispatch) => {
  axios.post('/accounts', accountType, { headers: { Authorization: `Bearer ${sessionStorage.token}` } })
    .then(res => dispatch({
      type: CREATE_ACCOUNT,
      payload: res.data.data
    }))
    .catch(err => err);
};

export const getAccountTransaction = (account) => (dispatch) => {
  axios.get(`/accounts/${account}/transactions`, { headers: { Authorization: `Bearer ${sessionStorage.token}` } })
    .then(res => dispatch({
      type: USER_TRANSACTIONS,
      payload: res.data.data
    }))
    .catch(err => dispatch({
      type: USER_TRANSACTIONS,
      payload: err.response.data
    }));
};
