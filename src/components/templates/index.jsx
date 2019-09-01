import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { ProtectedRoute, GuestRoute } from './protectedRoute';

import WelcomePage from '../organisms/landing/index.jsx';
import Register from '../organisms/landing/register.jsx';
import Login from '../organisms/landing/login.jsx';
import Dashboard from '../organisms/dashboard/index.jsx';
import CreateAccount from '../organisms/dashboard/createAccount';

const index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <GuestRoute path='/register' component={Register} />
        <GuestRoute path='/login' component={Login} />
        <ProtectedRoute path='/dashboard/createaccount' component={CreateAccount} />
        <Route render={({ location }) => (
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={500}
              classNames="fade"
            >
              <ProtectedRoute path='/dashboard' component={Dashboard} />
            </CSSTransition>
          </TransitionGroup>
        )} />
      </Switch>
    </BrowserRouter>
  )
}

export default index;
