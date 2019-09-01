import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class navbar extends React.Component {
  render() {
    const { auth: { isAuthenticated } } = this.props;
    return (
      <header className="showcase-header">
        <div className="showcase-logo"><Link to="/">Banka</Link></div>
        {isAuthenticated ? (<ul className="showcase-list">
          <li className="showcase-item">
            <Link to="/dashboard/account" className="showcase-link">Dashboard</Link>
          </li>
        </ul>) : (<ul className="showcase-list">
          <li className="showcase-item">
            <Link to="/login" className="showcase-link">Login</Link>
          </li>
          <li className="showcase-item">
            <Link to="/register" className="showcase-link">Register</Link>
          </li>
        </ul>)}
      </header>
    );
  }
}

navbar.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default connect(mapStateToProps, {})(navbar);
