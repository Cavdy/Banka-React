import { USER_SPECIFIC_ACCOUNT } from '../../actions/types';

const initState = {}

export default function (state = initState, action) {
  switch (action.type) {
    case USER_SPECIFIC_ACCOUNT:
      return {
        isLoading: false,
        userAccount: action.payload
      };
    default:
      return state;
  }
}