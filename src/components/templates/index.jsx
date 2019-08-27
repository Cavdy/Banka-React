import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import WelcomePage from '../organisms/landing/index.jsx';
import Register from '../organisms/landing/register.jsx';
import Login from '../organisms/landing/login.jsx';
import Dashboard from '../organisms/dashboard/index.jsx';

const index = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={WelcomePage} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  )
}

export default index;
