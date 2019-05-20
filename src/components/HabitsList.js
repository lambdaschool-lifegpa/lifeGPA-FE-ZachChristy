import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { } from '../actions'

function HabitsList() {
    return (
      <div>
        habitsList
      </div>
    );
}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData
});

export default connect( mapStateToProps, { } )(HabitsList);
