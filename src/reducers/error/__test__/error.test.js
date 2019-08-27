import errorReducer from '../errorReducer';
import { GET_ERRORS, GET_ERROR } from '../../../actions/types';

describe('Error Reducer', () => {

  const user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  }

  it('Should return default value if action doesn\'t match', () => {
    const err = errorReducer(undefined, {
      type: GET_ERROR,
      payload: user
    });
    expect(err).toEqual({
      errors: '',
      isLoading: true
    })
  });


  it('Should return value if action matches', () => {
    const err = errorReducer(undefined, {
      type: GET_ERRORS,
      payload: user
    });
    expect(err.errors).toHaveProperty('firstName', '');
    expect(err.errors).toHaveProperty('lastName', '');
    expect(err.errors).toHaveProperty('email', '');
    expect(err.errors).toHaveProperty('password', '');
  })
});
