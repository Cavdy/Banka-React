import React, { Component } from 'react';

import CreateAccount from '../../molecules/dashboard/createAccount';
import Navbar from '../../molecules/landing/navbar';
import Footer from '../../molecules/landing/footer';

export default class index extends Component {
  render() {
    return (
      <div className="showcase">
        <div className='showcase-content'>
          <Navbar />
            <CreateAccount />
          <Footer />
        </div>
      </div>
    )
  }
}
