import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import WelcomePage from '../../molecules/landing/index.jsx';
import Navbar from '../../molecules/landing/navbar.jsx';
import Footer from '../../molecules/landing/footer.jsx';
import Register from '../../molecules/landing/registerForm.jsx';

export default class index extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className='showcase-content'>
          <Navbar />
            <Route exact path='/' component={WelcomePage} />
            <Route path='/register' component={Register} />
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}
