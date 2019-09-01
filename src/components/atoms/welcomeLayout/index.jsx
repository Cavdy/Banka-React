import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class index extends React.Component {
  render() {
    const { account } = this.props;
    let balance;
    {balance = Object.keys(account).length !== 0 ? account.userAccount.balance : 0}
    return (
      <div className="welcome-user">
        <img className="welcome-user-photo" src="https://res.cloudinary.com/cavdy/image/upload/v1566925735/js2_pfak7d.png" alt="" />
        <div className="welcome-user-details">
          <p className="welcome-username">Welcome back, <span id="firstname">{sessionStorage.firstName}</span></p>
          <p className="last-login">your last login was <span id="lastLogin">{localStorage.lastLogin}</span></p>
        </div>
        <div className="welcome-user-balance">
          <p className="total-balance">Total Balance</p>
          <p className="total-balance-amount">#{balance}</p>
        </div>
      </div>
    )
  }
}

index.propTypes = {
  account: PropTypes.object
}

const mapStateToProps = (state) => ({
  account: state.userAccount,
});

export default connect(mapStateToProps, { })(index);
