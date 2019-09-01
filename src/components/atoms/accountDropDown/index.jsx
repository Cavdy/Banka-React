import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loading from '../loading';

import {
  getUserAccounts,
  getAccount,
  getAccountTransaction
} from '../../../actions/userAccountActions';

class AccountDropDown extends React.Component {
  state = {
    isLoading: false
  }
 
  componentDidMount() {
    const userEmail = sessionStorage.email;
    this.props.getUserAccounts(userEmail);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { accounts } = nextProps;

    if (Object.keys(accounts).length !== 0) {
      setTimeout(() => {
        const getSpecificAccount = document.querySelector('.accounts-select');
        nextProps.getAccount(getSpecificAccount.value)
        nextProps.getAccountTransaction(getSpecificAccount.value)
      }, 1000)

      const { isLoading } = accounts;
      return ({ isLoading });
    }
    return null;
  }

  loadAccount = (event) => {
    event.preventDefault();

    this.setState({ isLoading: true })
    
    const { errors: { errors: error } } = this.props;
    if (error === '') {
      const getSpecificAccount = Array.from(event.target.previousSibling.children);
      this.props.getAccount(getSpecificAccount[0].value)
      this.props.getAccountTransaction(getSpecificAccount[0].value)
    }
  }

  render() {
    let options;
    const { accounts } = this.props;
    const { isLoading } = this.state;
  
    if (Object.keys(accounts).length !== 0) {
      options = accounts.userAccounts.map((account) => {
        return (
          <option key={account.id} value={account.accountnumber}>{account.accountnumber}</option>
        )
      })
    }

    return (
      <div className="accounts">
        {isLoading ? <Loading /> : <span />}
        <div className="card">
          <form action="" className="accounts-form">
            <div className="form-group">
              <select className="accounts-select" id="accounts">
                {options}
              </select>
            </div>

            <input type="submit" onClick={this.loadAccount} id="submit" className="btn-go" value="Go" />
          </form>
        </div>
      </div>
    )
  }
}

AccountDropDown.propTypes = {
  getUserAccounts: PropTypes.func.isRequired,
  getAccountTransaction: PropTypes.func.isRequired,
  getAccount: PropTypes.func.isRequired,
  accounts: PropTypes.object,
  errors: PropTypes.object,
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  {
    getUserAccounts,
    getAccount,
    getAccountTransaction
  }
)(AccountDropDown)
