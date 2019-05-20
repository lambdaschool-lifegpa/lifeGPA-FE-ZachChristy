import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';
import { Link } from 'react-router-dom';

import { getUserData } from '../actions';


class Dashboard extends Component {

  componentDidMount() {
    this.props.getUserData(this.props.loggedInUser.id)
  }

  render() {
    console.log(this.props)
    if(this.props.fetchingData) {
      return <Loader type="Rings" color="black" height="120" width="120" />
    } else {
      return (
        <div>
          <div>
            {this.props.userData.habits.map(habit => {
              return <div>{habit}</div>
            })}
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

export default connect( mapStateToProps, { getUserData } )(Dashboard);
