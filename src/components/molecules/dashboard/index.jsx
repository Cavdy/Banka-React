import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Header from '../../atoms/header';
import SideBar from '../../atoms/sidebar';
import DashboardBody from '../../atoms/dashboard';
import Welcome from '../../atoms/welcomeLayout';
import Loading from '../loading';

import { getUserAccounts } from '../../../actions/userAccountActions';

class Dashboard extends React.Component {
  state = {
    isLoading: true,
    sidebar: true,
    userAccounts: []
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();

    const userEmail = sessionStorage.email;
    this.props.getUserAccounts(userEmail)
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { accounts, errors: { isLoading } } = nextProps;

    if (Object.keys(accounts).length !== 0) {
      const { isLoading, userAccounts } = accounts;
      return ({ isLoading, userAccounts });
    }

    if (!isLoading) return ({ isLoading: false });

    return null;
  }

  resize = () => {
    this.setState({ sidebar: window.innerWidth <= 900 });
  }

  toggleSidebar = () => {
    const { sidebar } = this.state;
    this.setState({
      sidebar: !sidebar
    });
  }

  render() {
    let { isLoading, userAccounts, sidebar } = this.state;

    return (
      <div className="container">
      {isLoading ? <Loading /> : <span />}
        <div className="wrapper">
          <SideBar sidebar={sidebar} />
          <div className="main-content">
            <Header toggleSidebar={this.toggleSidebar} />
            <Welcome />
            <DashboardBody accounts={userAccounts} />
          </div>
        </div>
      </div>
    )
  }
}

Dashboard.propTypes = {
  getUserAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  userAccounts: PropTypes.array,
  errors: PropTypes.object
}

const mapStateToProps = (state) => ({
  accounts: state.accounts,
  errors: state.errors
});

export default connect(mapStateToProps, { getUserAccounts })(Dashboard)