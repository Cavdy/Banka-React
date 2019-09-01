import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userType: '',
      isAdmin: ''
    }
  }

  componentDidMount() {
    const { auth: { user } } = this.props;
    if (Object.keys(user).length !== 0) {
      this.setState({
        userType: user.type,
        isAdmin: user.isAdmin
      })
    }
    const selectedMenu = document.querySelector('.active');
    selectedMenu.parentElement.classList.add('sidebar-item-active');
  }

  render() {
    const { sidebar } = this.props;
    const { userType, isAdmin } = this.state;

    let sidebarType;

    if (userType === 'client' && isAdmin === false) {
      sidebarType = (
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <NavLink to="/dashboard/account" className="sidebar-link">Dashboard</NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/dashboard/createaccount" className="sidebar-link">Create an account</NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/dashboard/transactions" className="sidebar-link">Transactions</NavLink>
          </li>
        </ul>
      )
    } else {
      sidebarType = (
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <NavLink to="/dashboard/account" className="sidebar-link">Dashboard</NavLink>
          </li>
          <li className="sidebar-item">
            <NavLink to="/createaccount" className="sidebar-link">Create an account</NavLink>
          </li>
          <li className="sidebar-item">
            <a href="./accounts.html" className="sidebar-link">Credit / Debit</a>
          </li>
          <li className="sidebar-item">
            <a href="./viewaccounts.html" className="sidebar-link">All Accounts</a>
          </li>
          <li className="sidebar-item">
            <NavLink to="/dashboard/transactions" className="sidebar-link">Transactions</NavLink>
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
      )
    }

    return (
      <div className={!sidebar ? 'sidebar' : 'sidebar sidebar-hide'}>
        <div className="sidebar-header">
          <h1 className="logo">Banka</h1>
        </div>
        <div className="sidebar-menu">
          { sidebarType }
        </div>
        <div className="sidebar-legal">
          &copy; 2019 Banka. All Rights Reserved.
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  auth: PropTypes.object.isRequired,
  sidebar: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(Sidebar)
