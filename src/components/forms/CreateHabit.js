import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router'
import Loader from 'react-loader-spinner';

import { createHabit } from '../../actions';

class CreateHabit extends Component {
  state = {
    createdHabit: {
      title: '',
      category: ''
    }
  }

  changeHandler = e => {
    e.preventDefault()

    this.setState({
      createdHabit: {
        ...this.state.createdHabit,
        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();
    
    this.props.createHabit(this.state.createdHabit)
    .then(() => {
      this.props.history.push('/daily-approvals')
    })
    this.setState({
      createdHabit: {
        title: '',
        category: ''
      }
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='title' value={this.state.createdHabit.title} onChange={this.changeHandler} placeholder='Title of Habit' required/>
          <input type='text' name='category' value={this.state.createdHabit.category} onChange={this.changeHandler} placeholder='category' required/>
          <button type='submit'>{this.props.savingHabit ? <Loader type="ThreeDots" color="black" height={5} width={5} /> : 'Submit'}</button>
        </form>
        {this.props.error && <p>{this.props.error}</p>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  savingHabit: state.createHabitReducer.savingHabit,
  error: state.createHabitReducer.error
});

export default connect( null, { createHabit } )(CreateHabit);
