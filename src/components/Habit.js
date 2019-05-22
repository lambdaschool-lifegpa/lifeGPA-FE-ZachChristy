import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

import { getHabit, deleteHabit } from '../actions'

class Habit extends Component {

  clickHandler = () => {
    this.props.deleteHabit(this.props.match.params.id)
    .then(() => {
      this.props.history.push('/habits-list')
    })
  }

  componentDidMount() {
    this.props.getHabit(this.props.match.params.id)
  }

  render(){
    console.log('habit',this.props.habit)
    return (
      <div>
      { !this.props.habit ? <p>Add Habits to start tracking your progress</p> : this.props.habit.habitTitle}
      <Link to='/update-habit' ><div>Edit Habit</div></Link>
      <div onClick={this.clickHandler}>Delete</div>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  habit: state.fetchHabitReducer.habit,
  loggedInUser: state.loginReducer.loggedInUser
});

export default connect( mapStateToProps, { getHabit, deleteHabit } )(withRouter(Habit));
