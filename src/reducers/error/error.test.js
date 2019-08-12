import errorReducer from './errorReducer';
import { GET_ERRORS, GET_ERROR } from '../../actions/types';

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
    expect(err).toEqual({})
  });


  it('Should return value if action matches', () => {
    const err = errorReducer(undefined, {
      type: GET_ERRORS,
      payload: user
    });
    expect(err).toHaveProperty('firstName', '');
    expect(err).toHaveProperty('lastName', '');
    expect(err).toHaveProperty('email', '');
    expect(err).toHaveProperty('password', '');
  })
});
