import React from 'react';
// import { Link } from 'react-router-dom';

import { creative } from '../../../svg';

const index = () => {
  return (
    <main className="showcase-body">
      <div className="showcase-body-left">
        <h1 className="showcase-title">
          Welcome to Banka
        </h1>
        <span className="showcase-description">Your safety is our concern</span>
        {/* <Link to="/login" className="showcase-btn">Go to Dashboard</Link> */}
      </div>
      <div className="showcase-body-right">
        <img src={creative} alt="" className="showcase-body-right-img" />
      </div>
    </main>
  )
}

export default index;
