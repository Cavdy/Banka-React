import React from 'react'

import { sprite } from '../../../svg';

export default function header() {
  return (
    <header className="header">
      <button className="toggle-sidebar" id="toggle-sidebar">
        <svg className="toggle-sidebar-button">
          <use xlinkHref={`${sprite}#icon-list`} />
        </svg>
      </button>
      <form className="search-form">
        <input type="text" className="search-input" placeholder="Search..." />
        <button className="search-form-button">
          <svg className="search-form-icon">
            <use xlinkHref={`${sprite}#icon-magnifying-glass`} />
          </svg>
        </button>
      </form>

      <nav className="user-nav">
        <div className="user-nav-icon-box">
          <svg className="user-nav-icon">
            <use xlinkHref={`${sprite}#icon-bell`} />
          </svg>
          <span className="user-nav-notification"></span>

          <div className="user-nav-notification-pop">
            <ul className="list">
              <li className="item">
                <a href="#" className="link">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae, optio?</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="user-nav-user">
          <img className="user-nav-user-photo" src="https://res.cloudinary.com/cavdy/image/upload/v1566925735/js2_pfak7d.png" alt="" />
          <span className="user-nav-username">{sessionStorage.firstName}</span>
          <svg className="user-nav-user-icon">
            <use xlinkHref={`${sprite}#icon-chevron-down`} />
          </svg>

          <div className="user-nav-user-pop">
            <ul className="list">
              <li className="item"><a href="./profile.html" className="link">
                <svg className="user-nav-link-icon">
                  <use xlinkHref={`${sprite}#icon-user`} />
                </svg>Profile</a>
              </li>
              <li className="item"><a href="#" className="link">
                <svg className="user-nav-link-icon">
                  <use xlinkHref={`${sprite}#icon-help-with-circle`} />
                </svg>Help</a>
              </li>
              <li className="item"><a href="#" className="link" id="logout">
                <svg className="user-nav-link-icon">
                  <use xlinkHref={`${sprite}#icon-log-out`} />
                </svg>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  )
}
