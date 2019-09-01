import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AccountDropDown from '../../atoms/accountDropDown';
import Loading from '../../atoms/loading';

class Transactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { userTransaction } = nextProps;

    if (Object.keys(userTransaction).length !== 0) {
      const { isLoading } = userTransaction;
      return ({ isLoading })
    }

    return null;
  }


  render() {
    const { userTransaction } = this.props;
    const { userTransaction: transactions } = userTransaction;
    const { isLoading } = this.state;
    let transactData;

    if (Object.keys(userTransaction).length !== 0) {
      if (transactions.status === 404) {
        transactData = (
          <div className="alert alert-danger"><span className="errMsg">{transactions.data}</span><span id="close">X</span></div>
        )
      } else {
        transactData = (
          <div className="tran-table card">
            <h1 className="content-title">Users Accounts</h1>

            <div className="table">
              <div className="table-row">
                <div className="account-index">Created On</div>
                <div className="account-name">Account Num</div>
                <div className="account-number">Account Type</div>
                <div className="record">Record</div>
                <div className="delete">Balance</div>
              </div>
              {
                transactions.map((transaction) => {
                  return (
                    <div className="table-row" key={transaction.id}>
                      <div className="account-index">{transaction.createdon}</div>
                      <div className="account-name">{transaction.accountnumber}</div>
                      <div className="account-number">{transaction.type}</div>
                      <div className="record">Record</div>
                      <div className="delete">{transaction.newbalance}</div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        )
      }
    } else {
      transactData = (
        <div></div>
      )
    }

    return (
      <main className="main-body">
        {isLoading ? <Loading /> : <span />}
        <AccountDropDown />
        {transactData}
      </main>
    )
  }
}

Transactions.propTypes = {
  userTransaction: PropTypes.object
}

const mapStateToProps = (state) => ({
  userTransaction: state.userAccountTransaction,
});

export default connect(mapStateToProps, { })(Transactions)
