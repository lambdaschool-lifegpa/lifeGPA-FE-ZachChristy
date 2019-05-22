import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { } from '../actions'

function HabitsList(props) {

  const clickHandler = () => {

  }

  const emptyArr = props.userData.habits == '';

  return (
    <div>
    { emptyArr ? <p>Add Habits to start tracking your progress</p> : props.userData.habits.map(habit => {
      return <div key={habit.id}>
              <h4>{habit.habitTitle}</h4>
              <h4>{habit.category}</h4>
            </div>
    })}
    <Link to='/create-habit' ><div>Add Habit</div></Link>
    </div>
  );
}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData
});

export default connect( mapStateToProps, { } )(HabitsList);
