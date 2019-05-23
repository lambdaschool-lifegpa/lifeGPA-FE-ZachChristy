import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import Loader from 'react-loader-spinner';

import { updateHabit } from '../../actions';

class UpdateHabit extends Component {
  state = {
    habit: {
      id: this.props.habit.id,
      habitTitle: this.props.habit.habitTitle,
      categoryId: this.props.habit.categoryId
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
      this.props.history.push('/habits-list')
    })
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submitHandler}>
        <input type='text' name='habitTitle' value={this.state.habit.habitTitle} onChange={this.changeHandler} placeholder='Title of Habit' required/>
        <input type='text' name='categoryId' value={this.state.habit.categoryId} onChange={this.changeHandler} placeholder='categoryId' required/>
        <button type='submit'>{this.props.updatingHabit ? <Loader type="ThreeDots" color="black" height={5} width={5} /> : 'Submit'}</button>
      </form>
        {this.props.error && <p>{this.props.error}</p>}
        <Link to='/create-category'><div>Create Category</div></Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  habit: state.fetchHabitReducer.habit,
  updatingHabit: state.updateHabitReducer.updatingHabit
});

export default connect( mapStateToProps , { updateHabit } )(withRouter(UpdateHabit));
