import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputField from '../../atoms/inputFields/inputField';
import Button from '../../atoms/buttons';
import { loginUser, validateToken } from '../../../actions/authActions';
import Loading from '../../atoms/loading';
import Notify from '../../atoms/notification';

class LoginForm extends Component {
  constructor() {
    super();
    this.state = {
      inputState: [
        { id: 1, label: 'Email', type: 'text', placeholder: 'Email', formId: 'email', name: 'email', className: 'form-input', error: '' },
        { id: 2, label: 'Password', type: 'password', placeholder: 'Password', formId: 'password', name: 'password', className: 'form-input', error: '' }
      ],
      isLoading: false,
    }
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    const { search } = window.location;
    const params = new URLSearchParams(search);
    let query = params.get('secret');
    const whiteSpace = /\s/g;

    if (query !== null && query !== undefined) {
      query = query.replace(whiteSpace, '');
      if (query !== '') this.props.validateToken(query);
    }
  }

  componentDidUpdate(prevProps) {
    const prevErrors = prevProps.errors.errors;
    const {
      errors: { errors, isLoading },
      auth: { isAuthenticated, user }
    } = this.props;
    if (prevErrors !== errors) {
      const { email, password } = errors;
      this.setState({
        inputState: [
          { id: 1, label: 'Email', type: 'text', placeholder: 'Email', formId: 'email', name: 'email', className: 'form-input', error: email },
          { id: 2, label: 'Password', type: 'password', placeholder: 'Password', formId: 'password', name: 'password', className: 'form-input', error: password }
        ],
        isLoading,
      })
    }

    if (isAuthenticated) {
      const { id, firstName, lastName, email, token, avatar } = user;
      sessionStorage.setItem('token', token);
      sessionStorage.setItem('email', email);
      sessionStorage.setItem('id', id);
      // sessionStorage.setItem('login', login);
      sessionStorage.setItem('avatar', avatar);
      sessionStorage.setItem('firstName', firstName);
      sessionStorage.setItem('lastName', lastName);
    }
  }
  
  onSubmit = (event) => {
    event.preventDefault();
    let arry = Array.from(event.target.children[0].children)
    const user = arry.map((i) => {
      return i.children[1].value;
    });

    this.setState({
      isLoading: true
    })

    const newUser = {
      email: user[0],
      password: user[1],
    }

    this.props.loginUser(newUser)
  }

  render() {
    let { isLoading, inputState } = this.state;
    let { errors: {
        notValid
      },
      auth: {
        validated,
        isAuthenticated
      }
    } = this.props;
    let style, message;

    if (notValid !== '' && notValid !== undefined) {
      isLoading = false;
      message = `${notValid}. Check your mail`;
      style = 'notify-error';
    }

    if (validated !== '' && validated !== undefined) {
      isLoading = false;
      message = `${validated}. You can now login`;
      style = 'notify-success';
    }

    if (isAuthenticated) {
      return <Redirect to='/dashboard/account' />
    }
  
    return (
      <div>
        <Notify data={message} offLoader={this.offLoader} style={style} />
        {isLoading ? <Loading /> : <span />}
        <main className="showcase-body" data-test="showcase-body">
          <div className="showcase-body-left">
            <h1 className="showcase-title">
              Sign In / Login
            </h1>
          </div>
          <div className="showcase-body-right">
            <form onSubmit={this.onSubmit} className="form form-case">
              <InputField inputs={inputState} handleChange={this.handleChange}/>
              <Button value='Login' />
            </form>
          </div>
        </main>
      </div>
    )
  }
}

LoginForm.propTypes = {
  loginUser: PropTypes.func.isRequired,
  validateToken: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { loginUser, validateToken })(LoginForm);
