import React, { Component } from 'react';

import WelcomePage from '../../molecules/landing/index.jsx';
import Navbar from '../../molecules/landing/navbar.jsx';
import Footer from '../../molecules/landing/footer.jsx';

export default class index extends Component {
  render() {
    return (
      <div className="showcase">
        <div className='showcase-content'>
          <Navbar />
            <WelcomePage />
          <Footer />
        </div>
      </div>
    )
  }
}
