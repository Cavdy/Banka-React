import authReducer from '../authReducer';

describe('Auth Reducer', () => {

  it('Should return default value', () => {
    const auth = authReducer(undefined, {});
    expect(auth).toHaveProperty('isAuthenticated', false);
    expect(auth).toHaveProperty('user', {});
  })
});
