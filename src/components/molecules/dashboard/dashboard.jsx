import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccountDropDown from '../../atoms/accountDropDown';
import Loading from '../../atoms/loading';

import { getAccount } from '../../../actions/userAccountActions';

class dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { account } = nextProps;

    if (Object.keys(account).length !== 0) {
      const { isLoading } = account;
      return ({ isLoading })
    }

    return null;
  }

  render() {
    const { account, errors: { errors: error } } = this.props;
    const { isLoading } = this.state;

    return (
      <main className="main-body">
        {isLoading ? <Loading /> : <span />}
        <AccountDropDown />
        {Object.keys(account).length !== 0 ? (
          <div className="dashboard-wrapper">
          <div className="user-details">
            <div className="card">
              <h2 className="user-details-title">Account Details</h2>
              <div className="div">
                <h4 className="user-details-name">Account name: </h4>
                <span id="username">{`${account.userAccount.firstname} ${account.userAccount.lastname}`}</span>
              </div>
              <div className="div">
                <h4 className="user-details-number">Account Number: </h4>
                <span id="account-number">{account.userAccount.accountnumber}</span>
              </div>
              <div className="div">
                <h4 className="user-details-balance">Account Balance: </h4>
                <span id="account-balance">{account.userAccount.balance}</span>
              </div>
              <div className="div">
                <h4 className="type">Type: </h4>
                <span id="type">{account.userAccount.type}</span>
              </div>
              <div className="div">
                <h4 className="account-status">Account Status: </h4>
                <span id="account-status">{account.userAccount.status}</span>
              </div>
              <div className="div">
                <h4 className="user-details-created">Account Created: </h4>
                <span id="account-created">{account.userAccount.createdon}</span>
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
        ) : (
          <div className="alert alert-danger"><span className="errMsg">{error.data}</span><span id="close">X</span></div>
        )}
      </main>
    )
  }
}

dashboard.propTypes = {
  getAccount: PropTypes.func.isRequired,
  account: PropTypes.object,
  errors: PropTypes.object
}

const mapStateToProps = (state) => ({
  account: state.userAccount,
  errors: state.errors
});

export default connect(mapStateToProps, { getAccount })(dashboard)
