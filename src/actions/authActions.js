import axios from '../config/axoisInstance';
import { GET_ERRORS } from './types';

export const registerUser = (userData) => (dispatch) => {
  axios.post('/auth/signup', userData)
    .then(res => console.log(res))
    .catch(err => dispatch({
      type: GET_ERRORS,
      payload: err.response.data.data
    }));
};

// history.push('/login')