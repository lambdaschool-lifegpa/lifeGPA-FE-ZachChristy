import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
import Loader from 'react-loader-spinner';

import { updateProfile } from '../../actions';

class UpdateProfile extends Component {
  state = {
    user: {
      id: this.props.userData.id,
      username: this.props.userData.username,
      email: this.props.userData.email,
      fullName: this.props.userData.fullName,
      password: this.props.userData.password,
      userImgUrl: this.props.userData.userImgUrl,
    }
  }

  changeHandler = e => {
    e.preventDefault()

    this.setState({
      user: {
        ...this.state.user,
        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.updateProfile(this.state.user)
    .then(() => {
      this.props.history.push(`/profile/${localStorage.getItem('userId')}`)
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submitHandler}>
        <input type='text' name='username' value={this.state.user.username} onChange={this.changeHandler} placeholder='Username' />
        <input type='text' name='email' value={this.state.user.email} onChange={this.changeHandler} placeholder='Email' />
        <input type='text' name='fullName' value={this.state.user.fullName} onChange={this.changeHandler} placeholder='FullName' />
        <input type='text' name='password' value={this.state.user.password} onChange={this.changeHandler} placeholder='Password' />
        <input type='text' name='userImgUrl' value={this.state.user.userImgUrl} onChange={this.changeHandler} placeholder='Image Url' />
        <button type='submit'>{this.props.updatingProfile ? <Loader type="ThreeDots" color="black" height={5} width={5} /> : 'Submit'}</button>
      </form>
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData,
  updatingProfile: state.updateProfileReducer.updatingProfile,
  deletingProfile: state.deleteProfileReducer.deletingProfile,
  error: state.updateProfileReducer.error
});

export default connect( mapStateToProps , { updateProfile } )(withRouter(UpdateProfile));
