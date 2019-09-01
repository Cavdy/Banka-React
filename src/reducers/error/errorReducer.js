import { GET_ERRORS,GET_USER_ERROR, NOT_VALIDATED } from '../../actions/types';

const initState = {
  isLoading: true,
  errors: ''
};

export default function (state = initState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      }
    case GET_USER_ERROR:
      return {
        ...state,
        isLoading: false,
        errors: action.payload
      }
    case NOT_VALIDATED:
      return {
        ...state,
        isLoading: false,
        notValid: action.payload
      }
    default:
      return state;
  }
}
