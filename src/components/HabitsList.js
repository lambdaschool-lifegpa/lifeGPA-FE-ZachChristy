import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

import { getUserData } from '../actions';

class HabitsList extends Component {

  componentDidMount() {
    this.props.getUserData(localStorage.getItem('userId'))
  }

  render(){

    return (
      <div>
      { !this.props.userData.habits ? <p>Add Habits to start tracking your progress</p> : this.props.userData.habits.map(habit => {
        return <div key={habit.id}>
                <Link to={`/habit/${habit.id}`} ><h4>{habit.habitTitle}</h4></Link>
              </div>
      })}
      <Link to='/create-habit' ><div>Add Habit</div></Link>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData,
  loggedInUser: state.loginReducer.loggedInUser,
  categoryList: state.fetchCategoryListReducer.categoryList,
  fetchingCategoryList: state.fetchCategoryListReducer.fetchingCategoryList
});

export default connect( mapStateToProps, { getUserData } )(withRouter(HabitsList));
