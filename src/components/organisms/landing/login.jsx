import React from 'react'

import Navbar from '../../molecules/landing/navbar.jsx';
import Footer from '../../molecules/landing/footer.jsx';
import Login from '../../molecules/landing/loginForm.jsx';

export default function login() {
  return (
    <div className="showcase">
      <div className='showcase-content'>
        <Navbar />
          <Login />
        <Footer />
      </div>
    </div>
  )
}
