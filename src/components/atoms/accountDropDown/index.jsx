import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { getAccount } from '../../../actions/userAccountActions';

class AccountDropDown extends React.Component {
  constructor(props) {
    super(props);
  }
 
  componentDidMount() {
    setTimeout(() => {
      const getSpecificAccount = document.querySelector('.accounts-select');
      this.props.getAccount(getSpecificAccount.value)
    }, 2000)
  }

  loadAccount = (event) => {
    event.preventDefault();
    const { errors: { errors: error } } = this.props;
    if (error === '') {
      const getSpecificAccount = Array.from(event.target.previousSibling.children);
      this.props.getAccount(getSpecificAccount[0].value)
    }
  }

  render() {
    let options;
    let count = 0;
    const { accountList } = this.props;
  
    if (accountList.length !== 0) {
      options = accountList.map((account) => {
        count += 1;
        return (
          <option key={count} value={account.accountnumber}>{account.accountnumber}</option>
        )
      })
    }

    return (
      <div className="accounts">
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
  getAccount: PropTypes.func.isRequired,
  accountList: PropTypes.array,
  accounts: PropTypes.array,
  account: PropTypes.object,
  errors: PropTypes.object,
}

const mapStateToProps = (state) => ({
  account: state.userAccount,
  errors: state.errors
});

export default connect(mapStateToProps, { getAccount })(AccountDropDown)
