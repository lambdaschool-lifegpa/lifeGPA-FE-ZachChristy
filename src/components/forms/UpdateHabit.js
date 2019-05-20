import React, { Component } from 'react';
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { updateHabit } from '../../actions';

class UpdateHabit extends Component {
  state = {
    habit: {
      id: this.props.userData.id,
      title: this.props.userData.title,
      category: this.props.userData.category
    }
  }

  changeHandler = e => {
    e.preventDefault()

    this.setState({
      habit: {
        ...this.state.habit,
        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.updateHabit(this.state.habit)
    .then(() => {
      this.props.history.push('/daily-approvals')
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submitHandler}>
        <input type='text' name='title' value={this.state.habit.title} onChange={this.changeHandler} placeholder='Title of Habit' required/>
        <input type='text' name='category' value={this.state.habit.category} onChange={this.changeHandler} placeholder='category' required/>
        <button type='submit'>{this.props.updatingHabit ? <Loader type="ThreeDots" color="black" height={5} width={5} /> : 'Submit'}</button>
      </form>
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData,
  updatingHabit: state.updateHabitReducer.updatingHabit
});

export default connect( mapStateToProps , { updateHabit } )(UpdateHabit);
