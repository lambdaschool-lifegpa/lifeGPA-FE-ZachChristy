import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link, withRouter } from 'react-router-dom';

import { getCategoryList } from '../actions'

class CategoryList extends Component {

  componentDidMount() {
    this.props.getCategoryList()
  }

  render(){
    console.log(!this.props.categoryList)
    return (
      <div>
      { !this.props.categoryList ? <p>Category List is Empty</p> : this.props.categoryList.map(category => {
        return <div key={category.id}>
                <h4>{category.categoryTitle}</h4>
              </div>
      })}
      <Link to='/create-category' ><div>Add Category</div></Link>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  categoryList: state.fetchCategoryListReducer.categoryList,
  fetchingCategoryList: state.fetchCategoryListReducer.fetchingCategoryList
});

export default connect( mapStateToProps, { getCategoryList } )(withRouter(CategoryList));
