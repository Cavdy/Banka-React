import React from 'react';

export default function index() {
  return (
    <div className="welcome-user">
      <img className="welcome-user-photo" src="https://res.cloudinary.com/cavdy/image/upload/v1566925735/js2_pfak7d.png" alt="" />
      <div className="welcome-user-details">
        <p className="welcome-username">Welcome back, <span id="firstname"></span></p>
        <p className="last-login">your last login was <span id="lastLogin"></span></p>
      </div>
      <div className="welcome-user-balance">
        <p className="total-balance">Total Balance</p>
        <p className="total-balance-amount"></p>
      </div>
    </div>
  )
}
