import { GET_ERRORS, NOT_VALIDATED } from '../../actions/types';

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
