import React from 'react'

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h1 className="logo">Banka</h1>
      </div>
      <div className="sidebar-menu">
        <ul className="sidebar-list">
          <li className="sidebar-item user sidebar-item-active">
            <a href="./dashboard.html" className="sidebar-link">Dashboard</a>
          </li>
          <li className="sidebar-item user">
            <a href="./createaccount.html" className="sidebar-link">Create an account</a>
          </li>
          <li className="sidebar-item staff admin">
            <a href="./accounts.html" className="sidebar-link">Credit / Debit</a>
          </li>
          <li className="sidebar-item staff admin">
            <a href="./viewaccounts.html" className="sidebar-link">All Accounts</a>
          </li>
          <li className="sidebar-item user">
            <a href="./transactions.html" className="sidebar-link">Transactions</a>
          </li>
          <li className="sidebar-item staff admin">
            <a href="./users.html" className="sidebar-link">Users</a>
          </li>
          <li className="sidebar-item admin">
            <a href="staffs.html" className="sidebar-link">Staff</a>
          </li>
          <li className="sidebar-item staff admin">
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
