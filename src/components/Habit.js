import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner';

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
    const catColor = this.props.categoryList.filter(cat => {
      return cat.id === this.props.habit.categoryId
    })
    return (
      <div>
        <h1>Selected Habit</h1>
        <div>
          { (this.props.habit == '' || catColor == '') ? <p>Add Habits to start tracking your progress</p>
            : <div>
                <div style={{width: '20px', height: '20px', border: '.01px solid black', borderRadius: '50%', backgroundColor: `${catColor[0].color}`}}>
                </div>
                <div>{catColor[0].categoryTitle}</div>
                <div>{this.props.habit.habitTitle}</div>
              </div>
          }
        </div>
        <Link to='/update-habit' ><div>Edit Habit</div></Link>
        <div onClick={this.clickHandler}>Delete</div>
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

export default connect( mapStateToProps, { getHabit, deleteHabit } )(withRouter(Habit));
