import React from 'react';

import Header from './header.jsx';
import SideBar from './sidebar.jsx';
import DashboardBody from './dashboard.jsx';
import Welcome from '../../atoms/welcomeLayout/index.jsx';

export default function index() {
  return (
    <div className="container">
      <div className="wrapper">
        <SideBar />
        <div className="main-content">
          <Header />
          <Welcome />
          <DashboardBody />
        </div>
      </div>
    </div>
  )
}
