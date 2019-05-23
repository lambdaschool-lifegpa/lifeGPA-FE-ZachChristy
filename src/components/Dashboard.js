import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Link, withRouter } from 'react-router-dom';

import { UserImage } from '../styles'
import { getUserData } from '../actions';


class Dashboard extends Component {

  componentDidMount() {
    this.props.getUserData(localStorage.getItem('userId'))
  }

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

  render() {

    if(this.props.fetchingData || !this.props.userData) {
      return <Loader type="Rings" color="black" height="120" width="120" />
    } else {
      console.log('Dashboard', this.props.userData.username)
      return (
        <div>
          <div>
            <UserImage src={`${this.props.userData.userImgUrl}`} ></UserImage>
          </div>
          <div>
            <h1>LifeGPA { this.calculation() }</h1>
          </div>
        </div>
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

export default connect( mapStateToProps, { getUserData } )(withRouter(Dashboard));
