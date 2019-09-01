import { SEND_VERIFY_TOKEN, CURRENT_USER, VALIDATED, LOGOUT_USER } from '../../actions/types';

const initState = {
  isAuthenticated: false,
  user: {},
  tokenSent: ''
}

export default function (state = initState, action) {
  switch (action.type) {
    case SEND_VERIFY_TOKEN:
      return {
        isLoading: false,
        tokenSent: action.payload
      };
    case VALIDATED:
      return {
        validated: action.payload
      };
    case CURRENT_USER:
      return {
        ...initState,
          isAuthenticated: true,
          isLoading: false,
          user: action.payload
        };
    case LOGOUT_USER:
      return state;
    default:
      return state;
  }
}