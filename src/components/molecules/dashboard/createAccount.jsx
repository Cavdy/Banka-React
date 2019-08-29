import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createAccount } from '../../../actions/userAccountActions';

class CreateAccount extends React.Component {
  selectAccountType = (event) => {
    event.preventDefault();
    const selectedValue = Array.from(event.target.previousSibling.children);
    
    const accountType = {
      type: selectedValue[1].value
    }
    this.props.createAccount(accountType);
  }

  render() {
    const { account } = this.props;
    let successMsg = '';

    if (Object.keys(account).length !== 0)
      successMsg = 'Account created successfully'

    return (
      <main className="showcase-body">
        <div className="showcase-body-left">
          <h1 className="showcase-title">
            Create an account
          </h1>
        </div>
        <div className="showcase-body-right">
          <p className="msg">{successMsg}</p>
          <form action="" className="form">
            <div className="form-group">
              <label htmlFor="selectrole" className="form-label">Account Type</label>
              <select className="form-select" id="type">
                <option value="current">Current</option>
                <option value="savings">Savings</option>
              </select>
            </div>
  
            <input type="submit" onClick={this.selectAccountType} id="submit" className="btn btn-block btn-primary" value="Create Account" />
          </form>
        </div>
      </main>
    )
  }
}

CreateAccount.propTypes = {
  createAccount: PropTypes.func.isRequired,
  account: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  account: state.createAccount
});

export default connect(mapStateToProps, { createAccount })(CreateAccount);
