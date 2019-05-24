import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom'
import Loader from 'react-loader-spinner';

import { updateHabit } from '../../actions';
import { FormContainer } from '../../styles'

class UpdateHabit extends Component {
  state = {
    habit: {
      id: this.props.habit.id,
      habitTitle: this.props.habit.habitTitle,
      categoryId: this.props.habit.categoryId
    },
    isClicked: false,
    color: null
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

    console.log(this.state.habit)

    this.props.updateHabit(this.state.habit)
    .then(() => {
      this.props.history.push('/habits-list')
    })
  }

  clickHandler = (e, id, color) => {
    e.preventDefault()

    this.setState({
      habit: {
        ...this.state.habit,
        categoryId: id
      }
    })

    if(!this.state.isClicked) {
      this.setState({
        isClicked: true,
        color: `${color}`
      })
    } else {
      this.setState({
        isClicked: false,
        color: 'transparent'
      })
    }

      e.target.style.backgroundColor = `${this.state.color}`
  }

  render() {
    const habitCategory = this.props.categoryList.filter(category => {
        return category.id === this.state.habit.categoryId
    })

    return (
      <div>
        <FormContainer>
          <h1>Edit Habit</h1>
          <form onSubmit={this.submitHandler}>
            <input type='text' name='habitTitle' value={this.state.habit.habitTitle} onChange={this.changeHandler} placeholder='Title of Habit' required/>
            <button type='submit'>{this.props.updatingHabit ? <Loader type="ThreeDots" color="black" height={5} width={5} /> : 'Submit'}</button>
          </form>
          {this.props.error && <p>{this.props.error}</p>}
        </FormContainer>
        <div>
          <h1>Habit Category</h1>
          { ( habitCategory == '' ) ? <Loader type="Rings" color="black" height="120" width="120" />
            : <h4>{habitCategory[0].categoryTitle}</h4>
          }
        </div>
        <div>
          <h1>Category List</h1>
          { !this.props.categoryList ? <p>Category List is Empty</p> : this.props.categoryList.map(category => {
            return <div key={category.id}>
                    <h4 onClick={e => this.clickHandler(e, category.id, category.color)}>{category.categoryTitle}</h4>
                  </div>
          })}
        </div>
        <Link to='/create-category'><div>Create Category</div></Link>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  habit: state.fetchHabitReducer.habit,
  updatingHabit: state.updateHabitReducer.updatingHabit,
  categoryList: state.fetchCategoryListReducer.categoryList,
  fetchingCategoryList: state.fetchCategoryListReducer.fetchingCategoryList
});

export default connect( mapStateToProps , { updateHabit } )(withRouter(UpdateHabit));
