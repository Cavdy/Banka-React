import React from 'react'

import Navbar from '../../molecules/landing/navbar.jsx';
import Footer from '../../molecules/landing/footer.jsx';
import Register from '../../molecules/landing/registerForm.jsx';

export default function register() {
  return (
    <div className="showcase">
      <div className='showcase-content'>
        <Navbar />
          <Register />
        <Footer />
      </div>
    </div>
  )
}
