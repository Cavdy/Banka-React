import React from 'react';
import { Route } from 'react-router-dom';

import Header from '../../atoms/header';
import SideBar from '../../atoms/sidebar';
import Welcome from '../../atoms/welcomeLayout';
import DashboardBody from '../../molecules/dashboard/dashboard';
import Transaction from '../../molecules/dashboard/transactions';

class Dashboard extends React.Component {
  state = {
    sidebar: true,
    userAccounts: []
  }
  componentDidMount() {
    window.addEventListener('resize', this.resize);
    this.resize();
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
    let { sidebar } = this.state;

    return (
      <div className="container">
        <div className="wrapper">
          <SideBar sidebar={sidebar} />
          <div className="main-content">
            <Header toggleSidebar={this.toggleSidebar} />
            <Welcome />
            <Route path="/dashboard/account" component={DashboardBody} />
            <Route path="/dashboard/transactions" component={Transaction} />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
