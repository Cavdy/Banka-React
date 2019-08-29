import { CREATE_ACCOUNT } from '../../actions/types';

const initState = {}

export default function (state = initState, action) {
  switch (action.type) {
    case CREATE_ACCOUNT:
      return {
        isLoading: false,
        createAccount: action.payload
      };
    default:
      return state;
  }
}