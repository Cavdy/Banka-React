import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import InputField from '../../atoms/inputFields/inputField.jsx';
import Button from '../../atoms/buttons/index.jsx';
import { registerUser } from '../../../actions/authActions';

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
    }
  }
  
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      const {firstname,lastname,email,password} = nextProps.errors
      this.setState({
        inputState: [
          { id: 1, label: 'First Name', type: 'text', placeholder: 'First Name', formId: 'firstname', name: 'firstName', className: 'form-input', error: firstname },
          { id: 2, label: 'Last Name', type: 'text', placeholder: 'Last Name', formId: 'lastname', name: 'lastName', className: 'form-input', error: lastname },
          { id: 3, label: 'Email', type: 'text', placeholder: 'Email', formId: 'email', name: 'email', className: 'form-input', error: email },
          { id: 4, label: 'Password', type: 'password', placeholder: 'Password', formId: 'password', name: 'password', className: 'form-input', error: password }
        ],
      })
    }
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    let arry = Array.from(e.target.children[0].children)
    const user = arry.map((i) => {
      return i.children[1].value;
    });

    const newUser = {
      firstName: user[0],
      lastName: user[1],
      email: user[2],
      password: user[3],
    }

    this.props.registerUser(newUser)
  }

  render() {
    return (
      <main className="showcase-body" data-test="showcase-body">
        <div className="showcase-body-left">
          <h1 className="showcase-title">
            Sign Up / Register
          </h1>
        </div>
        <div className="showcase-body-right">
          <form onSubmit={this.onSubmit} className="form form-case">
            <InputField inputs={this.state.inputState} handleChange={this.handleChange}/>
            <Button />
          </form>
        </div>
      </main>
    )
  }
}

RegisterForm.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(RegisterForm);
