import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Sidebar({ sidebar }) {
  return (
    <div className={!sidebar ? 'sidebar' : 'sidebar sidebar-hide'}>
      <div className="sidebar-header">
        <h1 className="logo">Banka</h1>
      </div>
      <div className="sidebar-menu">
        <ul className="sidebar-list">
          <li className="sidebar-item sidebar-item-active">
            <Link to="/dashboard" className="sidebar-link">Dashboard</Link>
          </li>
          <li className="sidebar-item">
            <Link to="/createaccount" className="sidebar-link">Create an account</Link>
          </li>
          <li className="sidebar-item">
            <a href="./accounts.html" className="sidebar-link">Credit / Debit</a>
          </li>
          <li className="sidebar-item">
            <a href="./viewaccounts.html" className="sidebar-link">All Accounts</a>
          </li>
          <li className="sidebar-item">
            <a href="./transactions.html" className="sidebar-link">Transactions</a>
          </li>
          <li className="sidebar-item">
            <a href="./users.html" className="sidebar-link">Users</a>
          </li>
          <li className="sidebar-item admin">
            <a href="staffs.html" className="sidebar-link">Staff</a>
          </li>
          <li className="sidebar-item">
            <a href="./activate.html" className="sidebar-link">Activate / Deactivate</a>
          </li>
        </ul>
      </div>
      <div className="sidebar-legal">
        &copy; 2019 Banka. All Rights Reserved.
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  sidebar: PropTypes.bool.isRequired
}