import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { store } from '../../store';

export const ProtectedRoute = ({ component: Component, ...rest }) => {
  const { auth: { isAuthenticated } } = store.getState();
  return (
    <Route {...rest} render={(props) => {
      if (isAuthenticated) {
        return <Component {...props} />
      } else {
        return <Redirect to={
          {
            pathname: "/",
            state: {
              from: props.location
            }
          }
        } />
      }
    }} />
  )
}
ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
}

export const GuestRoute = ({ component: Component, ...rest }) => {
  const { auth: { isAuthenticated } } = store.getState();
  return (
    <Route {...rest} render={(props) => {
      if (isAuthenticated) {
        return <Redirect to={
          {
            pathname: "/dashboard/account",
            state: {
              from: props.location
            }
          }
        } />
      } else {
        return <Component {...props} />
      }
    }} />
  )
}
GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.object
}