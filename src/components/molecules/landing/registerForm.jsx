import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputField from '../../atoms/inputFields/inputField';
import Button from '../../atoms/buttons';
import { registerUser } from '../../../actions/authActions';
import Loading from '../../atoms/loading';
import Notify from '../../atoms/notification';

class RegisterForm extends Component {
  constructor() {
    super();
    this.state = {
      inputState: [
        { id: 1, label: 'First Name', type: 'text', placeholder: 'First Name', formId: 'firstname', name: 'firstName', className: 'form-input', error: '' },
        { id: 2, label: 'Last Name', type: 'text', placeholder: 'Last Name', formId: 'lastname', name: 'lastName', className: 'form-input', error: '' },
        { id: 3, label: 'Email', type: 'text', placeholder: 'Email', formId: 'email', name: 'email', className: 'form-input', error: '' },
        { id: 4, label: 'Password', type: 'password', placeholder: 'Password', formId: 'password', name: 'password', className: 'form-input', error: '' }
      ],
      isLoading: false,
      tokenSent: ''
    }
  }
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { errors } = nextProps.errors;
    return errors !== '' ? errors : null;
  }

  componentDidUpdate(prevProps) {
    const prevTokenState = prevProps.auth.tokenSent;
    const prevErrors = prevProps.errors.errors;
    const { errors } = this.props.errors;
    const { firstname, lastname, email, password } = errors;
    const { tokenSent } = this.props.auth;
    let responseState = '';
    
    if (prevErrors !== errors) {
      responseState = {
        inputState: [
          { id: 1, label: 'First Name', type: 'text', placeholder: 'First Name', formId: 'firstname', name: 'firstName', className: 'form-input', error: firstname },
          { id: 2, label: 'Last Name', type: 'text', placeholder: 'Last Name', formId: 'lastname', name: 'lastName', className: 'form-input', error: lastname },
          { id: 3, label: 'Email', type: 'text', placeholder: 'Email', formId: 'email', name: 'email', className: 'form-input', error: email },
          { id: 4, label: 'Password', type: 'password', placeholder: 'Password', formId: 'password', name: 'password', className: 'form-input', error: password }
        ],
        isLoading: false,
      }
    } else if (prevTokenState !== tokenSent) {
      responseState = {
        isLoading: false,
        tokenSent
      }
    }

    if (responseState !== '') {
      this.setState(responseState)
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
      firstName: user[0],
      lastName: user[1],
      email: user[2],
      password: user[3],
    }

    this.props.registerUser(newUser)
  }

  render() {
    const { isLoading, inputState, tokenSent } = this.state;
    return (
      <div>
        <Notify data={tokenSent} style='notify-success' />
        {isLoading ? <Loading /> : <span />}
        <main className="showcase-body" data-test="showcase-body">
          <div className="showcase-body-left">
            <h1 className="showcase-title">
              Sign Up / Register
            </h1>
          </div>
          <div className="showcase-body-right">
            <form onSubmit={this.onSubmit} className="form form-case">
              <InputField inputs={inputState} handleChange={this.handleChange}/>
              <Button value='Register' />
            </form>
          </div>
        </main>
      </div>
    )
  }
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(RegisterForm);
