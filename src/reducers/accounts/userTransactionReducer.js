import { USER_TRANSACTIONS } from '../../actions/types';

const initState = {}

export default function (state = initState, action) {
  switch (action.type) {
    case USER_TRANSACTIONS:
      return {
        isLoading: false,
        userTransaction: action.payload
      };
    default:
      return state;
  }
}