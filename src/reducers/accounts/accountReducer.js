import { USER_ACCOUNTS } from '../../actions/types';

const initState = {}

export default function (state = initState, action) {
  switch (action.type) {
    case USER_ACCOUNTS:
      return {
        isLoading: false,
        userAccounts: action.payload
      };
    default:
      return state;
  }
}