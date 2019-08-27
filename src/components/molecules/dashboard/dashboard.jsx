import React from 'react';

export default function dashboard() {
  return (
    <main className="main-body">
      <div className="alert alert-danger"><span className="errMsg">Error </span><span id="close">X</span></div>
      <div className="accounts">
        <div className="card">
          <form action="" className="accounts-form">
            <div className="form-group">
              <select className="accounts-select" id="accounts">
              </select>
            </div>

            <input type="submit" id="submit" className="btn-go" value="Go" />
          </form>
        </div>
      </div>
      <div className="dashboard-wrapper">
        <div className="user-details">
          <div className="card">
            <h2 className="user-details-title">Account Details</h2>
            <div className="div">
              <h4 className="user-details-name">Account name: </h4>
              <span id="username"></span>
            </div>
            <div className="div">
              <h4 className="user-details-number">Account Number: </h4>
              <span id="account-number"></span>
            </div>
            <div className="div">
              <h4 className="user-details-balance">Account Balance: </h4>
              <span id="account-balance"></span>
            </div>
            <div className="div">
              <h4 className="type">Type: </h4>
              <span id="type"></span>
            </div>
            <div className="div">
              <h4 className="account-status">Account Status: </h4>
              <span id="account-status"></span>
            </div>
            <div className="div">
              <h4 className="user-details-created">Account Created: </h4>
              <span id="account-created"></span>
            </div>
          </div>
        </div>

        <div className="manager">
          <div className="card">
            <h2 className="user-details-title">Account Manager</h2>
            <div className="div">
              <h4 className="user-details-name">Name: </h4>
              <span id="manager">Cavdy</span>
            </div>
            <div className="div">
              <h4 className="user-details-number">Mobile Number: </h4>
              <span id="manager-number">09012345678</span>
            </div>
            <div className="div">
              <h4 className="user-details-email">email: </h4>
              <span id="manager-email">banka@banka.com</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
