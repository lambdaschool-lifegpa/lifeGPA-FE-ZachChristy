import React, { Component } from 'react';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom'
import Loader from 'react-loader-spinner';

import { createCategory } from '../../actions';
import {
  FormContainer,
  ColorandCatContainer,
  Button,
  UpdateContainer,
  PickerContainer,
  Column } from '../../styles'

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
      <UpdateContainer>
        <FormContainer>
          <h1>Create a Category</h1>
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
            <p onClick={() => this.props.history.goBack()}>Go Back</p>
          </form>
        </FormContainer>
        <p>Write your own Category and Color or Choose from the list below</p>
        {this.props.error && <p>{this.props.error}</p>}

        <PickerContainer>

          <Column>
            <h1>Choose a color</h1>
            <ColorandCatContainer>
              <div>
                <h4 name='color' onClick={this.clickHandler}>red</h4>
                <h4 name='color' onClick={this.clickHandler}>blue</h4>
                <h4 name='color' onClick={this.clickHandler}>green</h4>
                <h4 name='color' onClick={this.clickHandler}>yellow</h4>
                <h4 name='color' onClick={this.clickHandler}>purple</h4>
                <h4 name='color' onClick={this.clickHandler}>pink</h4>
                <h4 name='color' onClick={this.clickHandler}>orange</h4>
              </div>
            </ColorandCatContainer>
          </Column>

          <Column>
            <h1>Category List</h1>
            <ColorandCatContainer>
              { !this.props.categoryList ? <p>Category List is Empty</p> : this.props.categoryList.map(category => {
                return <div key={category.id}>
                        <h4 name='category' onClick={e => this.clickHandler(e, category.categoryTitle)} >{category.categoryTitle}</h4>
                      </div>
              })}
            </ColorandCatContainer>
          </Column>
        </PickerContainer>
      </UpdateContainer>
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
