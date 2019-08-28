import { combineReducers } from 'redux';
import authReducer from './auth/authReducer';
import errorReducer from './error/errorReducer';
import accountReducer from './accounts/accountReducer';
import userAccountReducer from './accounts/userAccountReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  accounts: accountReducer,
  userAccount: userAccountReducer
})
