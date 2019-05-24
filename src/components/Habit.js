import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom'

import { HabitContainer, HabitCatContainer, Button, EditDeleteContainer } from '../styles'
import { getHabit, deleteHabit, getUserData, getCategoryList } from '../actions'

class Habit extends Component {

  clickHandler = () => {
    this.props.deleteHabit(this.props.match.params.id)
    .then(() => {
      this.props.history.push('/habits-list')
    })
  }

  componentDidMount() {
    this.props.getHabit(this.props.match.params.id)
    this.props.getUserData(localStorage.getItem('userId'))
    this.props.getCategoryList()
  }

  render(){
    const catColor = this.props.categoryList.filter(cat => {
      return cat.id === this.props.habit.categoryId
    })
    return (
      <div>
        <h1>Selected Habit</h1>
        <HabitContainer>
          { (this.props.habit == '' || catColor == '') ? <p>Add Habits to start tracking your progress</p>
            : <HabitCatContainer>
                <div style={{width: '20px', height: '20px', border: `2px solid ${catColor[0].color}`, borderRadius: '50%' }}>
                </div>
                <h4>{catColor[0].categoryTitle}</h4>
                <span>|</span>
                <h4>{this.props.habit.habitTitle}</h4>
              </HabitCatContainer>
          }
          <EditDeleteContainer>
            <Button><Link to='/update-habit' >Edit Habit</Link></Button>
            <Button onClick={this.clickHandler}>Delete</Button>
          </EditDeleteContainer>
        </HabitContainer>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  habit: state.fetchHabitReducer.habit,
  loggedInUser: state.loginReducer.loggedInUser,
  categoryList: state.fetchCategoryListReducer.categoryList,
  fetchingCategoryList: state.fetchCategoryListReducer.fetchingCategoryList
});

export default connect( mapStateToProps, { getHabit, deleteHabit, getUserData, getCategoryList } )(withRouter(Habit));
