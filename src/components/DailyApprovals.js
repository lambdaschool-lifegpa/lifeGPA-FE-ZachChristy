import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { updateHabit, getUserData } from '../actions'

class DailyApprovals extends Component {
  state = {
    habit: {
      id: null,
      habitTitle: '',
      completionPoints: null,
      completed: null
    }
  }

  clickHandler = (e, habit) => {

  const callback = () => {
      this.props.updateHabit(this.state.habit)
      this.props.getUserData(localStorage.getItem('userId'))
    }

    if(e.target.getAttribute('name') === 'yes'){
      this.setState({
        habit: {
          id: habit.id,
          habitTitle: habit.habitTitle,
          completionPoints: 1,
          completed: true
        }
      }, () => { callback() })
    } else if(e.target.getAttribute('name') === 'no'){
      console.log('no')
        this.setState({
          habit: {
            id: habit.id,
            habitTitle: habit.habitTitle,
            completionPoints: 0,
            completed: false
          }
        }, () => { callback() })
    }
  }

  componentDidMount() {
    this.props.getUserData(localStorage.getItem('userId'))
  }

  render() {
    console.log(this.props.userData.habits)
    return (
      <div>
        {!this.props.userData.habits ? <p>Add Habits to start tracking your progress</p> : this.props.userData.habits.map(habit => {
          return (
            <div key={habit.id}>
              <div>{habit.habitTitle}</div>
              <div name='yes' onClick={e => this.clickHandler(e, habit)}>YES</div>
              <div name='no' onClick={e => this.clickHandler(e, habit)}>NO</div>
            </div>
          )
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData
});

export default connect( mapStateToProps, { updateHabit, getUserData } )(DailyApprovals);
