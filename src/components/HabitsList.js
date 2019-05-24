import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

import { ListContainer, ViewHabit } from '../styles'
import { getUserData } from '../actions';

class HabitsList extends Component {

  componentDidMount() {
    this.props.getUserData(localStorage.getItem('userId'))
  }

  render(){

    return (
      <div>
        <h1>List of your Habits</h1>
        <ListContainer>
          { !this.props.userData.habits ? <h5>Add Habits to start tracking your progress</h5> : this.props.userData.habits.map(habit => {
            return <ViewHabit key={habit.id}>
                    <Link to={`/habit/${habit.id}`} ><h4>{habit.habitTitle}</h4></Link>
                    <Link to={`/habit/${habit.id}`} ><i className="fas fa-eye"></i></Link>
                  </ViewHabit>
          })}
          <Link to='/create-habit' ><p>Add Habit</p></Link>
        </ListContainer>
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
