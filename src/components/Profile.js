import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Link, withRouter } from 'react-router-dom';

import { ProfileImage, Button, EditDeleteContainer, ProfileContainer, UserInfo } from '../styles'
import { deleteProfile } from '../actions';


class Profile extends Component {

  calculation = () => {

    if(!this.props.userData.habits) {
      return 'Add Habits to start tracking your progress'
    } else {

      const pointsArr = this.props.userData.habits.map(habit => {
        return habit.completionPoints
      }).reduce((acc, val) => {
        return acc + val
      }, 0)

      const result = (pointsArr / this.props.userData.habits.length)

      console.log(result)

      if(isNaN(result)) {
        return '0%'
      } else {
        const percentage = result * 100
        return `${parseFloat(percentage).toFixed( 2 )}%`
      }
    }
  }

  clickHandler = () => {
    this.props.deleteProfile(localStorage.getItem('userId'))
    .then(() => {
      localStorage.removeItem('userId')
      localStorage.removeItem('token')
      this.props.history.push('/register')
    })
  }

  render() {

    if(this.props.fetchingData || !this.props.userData) {
      return <Loader type="Rings" color="black" height="120" width="120" />
    } else {
      console.log('Dashboard', this.props.userData.username)
      return (
        <ProfileContainer>
            <ProfileImage src={`${this.props.userData.userImgUrl}`} ></ProfileImage>
          <UserInfo>
            <h2>{this.props.userData.username}</h2>
            <h4>LifeGPA { this.calculation() }</h4>
          </UserInfo>
          <EditDeleteContainer>
            <Button><Link to='/update-profile' >Edit Profile</Link></Button>
            <Button onClick={this.clickHandler}>Delete</Button>
          </EditDeleteContainer>
        </ProfileContainer>
      );
    }
  }
}

const mapStateToProps = state => ({
  loggedInUser: state.loginReducer.loggedInUser,
  userData: state.fetchUserDataReducer.userData,
  fetchingData: state.fetchUserDataReducer.fetchingData,
  error: state.fetchUserDataReducer.error
});

export default connect( mapStateToProps, { deleteProfile } )(withRouter(Profile));
