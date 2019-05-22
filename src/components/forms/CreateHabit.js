import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router'
import { withRouter } from 'react-router-dom'
import Loader from 'react-loader-spinner';

import { createHabit, getCategoryList } from '../../actions';

class CreateHabit extends Component {
  state = {
    createdHabit: {
      habitTitle: '',
      categoryId: ''
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
        habitTitle: '',
        categoryId: ''
      }
    })
  }

  componentDidMount() {
    this.props.getCategoryList()
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input type='text' name='habitTitle' value={this.state.createdHabit.habitTitle} onChange={this.changeHandler} placeholder='Title of Habit' required/>
          <input type='text' name='categoryId' value={this.state.createdHabit.categoryId} onChange={this.changeHandler} placeholder='category' required/>

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

export default connect( mapStateToProps , { createHabit, getCategoryList } )(withRouter(CreateHabit));
