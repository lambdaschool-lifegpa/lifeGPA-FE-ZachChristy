import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

import { } from '../actions'

function DailyReports() {
    return (
      <div>
        dailyReports
      </div>
    );
}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData
});

export default connect( mapStateToProps, { } )(DailyReports);
