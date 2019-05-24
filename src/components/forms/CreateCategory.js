import React, { Component } from 'react';
import { connect } from "react-redux";
import { Redirect } from 'react-router'
import { withRouter, Link } from 'react-router-dom'
import Loader from 'react-loader-spinner';

import { createCategory, getCategoryList } from '../../actions';

class CreateCategory extends Component {
  state = {
    createdCategory: {
      categoryTitle: '',
      color: ''
    }
  }

  changeHandler = e => {
    e.preventDefault()
    this.setState({
      createdCategory: {
        ...this.state.createdCategory,
        [e.target.name]: e.target.value
      }
    })
  }

  submitHandler = e => {
    e.preventDefault();

    this.props.createCategory(this.state.createdCategory)
    .then(() => {
      this.props.history.push('/update-habit')
    })
    this.setState({
      createdCategory: {
        categoryTitle: '',
        color: ''
      }
    })
  }

  clickHandler = (e, category) => {
    if(e.target.getAttribute('name') === 'color') {
      let colorValue = document.querySelector('input:nth-child(2)').value
      colorValue = e.target.innerText
      this.setState({
        createdCategory: {
          color: colorValue
        }
      })
    } else if (e.target.getAttribute('name') === 'category') {
      this.setState({
        createdCategory: {
          categoryTitle: category
        }
      })
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type='text'
            name='categoryTitle'
            value={this.state.createdCategory.categoryTitle}
            onChange={this.changeHandler}
            placeholder='Title of Category'
            required
          />
          <input
            type='text'
            name='color'
            value={this.state.createdCategory.color}
            onChange={this.changeHandler}
            placeholder='Category Color'
            required
          />
          <button type='submit'>{this.props.savingCategory ? <Loader type="ThreeDots" color="black" height={5} width={5} /> : 'Submit'}</button>
        </form>
        <p>Write your own Category and Color or Choose from the list below</p>
        {this.props.error && <p>{this.props.error}</p>}
        <div>
          <h4>Choose a color</h4>
          <div>
            <div>
              <p name='color' onClick={this.clickHandler}>red</p>
              <p name='color' onClick={this.clickHandler}>blue</p>
              <p name='color' onClick={this.clickHandler}>green</p>
            </div>
            <div>
              <p name='color' onClick={this.clickHandler}>yellow</p>
              <p name='color' onClick={this.clickHandler}>purple</p>
              <p name='color' onClick={this.clickHandler}>pink</p>
            </div>
            <div>
              <p name='color' onClick={this.clickHandler}>orange</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Category List</h4>
          { !this.props.categoryList ? <p>Category List is Empty</p> : this.props.categoryList.map(category => {
            return <div key={category.id}>
                    <p name='category' onClick={e => this.clickHandler(e, category.categoryTitle)} >{category.categoryTitle}</p>
                  </div>
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  categoryList: state.fetchCategoryListReducer.categoryList,
  fetchingCategoryList: state.fetchCategoryListReducer.fetchingCategoryList,
  savingCategory: state.createCategoryReducer.savingCategory,
  error: state.createCategoryReducer.error
});

export default connect( mapStateToProps , { createCategory } )(withRouter(CreateCategory));
