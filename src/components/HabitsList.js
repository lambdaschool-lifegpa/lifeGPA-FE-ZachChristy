import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { getUserData } from '../actions'

class HabitsList extends Component {

  clickHandler = () => {
  }

  componentDidMount() {
    this.props.getUserData(this.props.loggedInUser.id)
  }

  render(){
    const emptyArr = this.props.userData.habits == '';
    return (
      <div>
      { emptyArr ? <p>Add Habits to start tracking your progress</p> : this.props.userData.habits.map(habit => {
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
  loggedInUser: state.loginReducer.loggedInUser
});

export default connect( mapStateToProps, { getUserData } )(HabitsList);
