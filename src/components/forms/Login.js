import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Redirect } from 'react-router'

import { FormContainer } from '../../styles'
import { login } from '../../actions';

class Login extends Component {
  state = {
    credentials: {
      username: '',
      password: ''
    }
  }

  changeHandler = e => {
    e.preventDefault();
    this.setState({
      credentials: {
        ...this.state.credentials,
        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.login(this.state.credentials)
  }

  render() {
    if(this.props.isLoggedIn) {
      return <Redirect to={`/dashboard/${this.props.loggedInUser.id}`} />
    } else {
      return (
        <FormContainer>
          <h1>Log In</h1>
          <form onSubmit={this.submitHandler}>
            <input
              type='text'
              name='username'
              value={this.state.credentials.username}
              onChange={this.changeHandler}
              placeholder='Username'
            />
            <input
              type='password'
              name='password'
              value={this.state.credentials.password}
              onChange={this.changeHandler}
              placeholder='Password'
            />
            <button type='submit'>{this.props.loggingIn ? <Loader type="ThreeDots" color="black" height={20} width={60} /> : 'Submit'}</button>
          </form>
          {this.props.error && <p>{this.props.error}</p>}
        </FormContainer>
      );
    }
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.loginReducer.loggedInUser,
  loggingIn: state.loginReducer.loggingIn,
  isLoggedIn: state.loginReducer.isLoggedIn,
  error: state.loginReducer.error
});

export default connect( mapStateToProps, { login } )(Login);
