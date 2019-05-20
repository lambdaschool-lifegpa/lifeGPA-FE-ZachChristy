import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

function Nav(props) {
  return (
    <nav>
      <NavLink to='/dashboard/:id'><div>Dashboard</div></NavLink>
      <NavLink to='/daily-reports'><div>Daily Reports</div></NavLink>
      <NavLink to='/daily-approvals'><div>Daily Approvals</div></NavLink>
      <NavLink to='/habits-list'><div>List Of Habits</div></NavLink>
      { !props.isLoggedIn ?
        <NavLink to='/login'><div>Log In</div></NavLink>
          : <NavLink to='/login'><div>Log Out</div></NavLink> }
      <NavLink to='/register'><div>Register</div></NavLink>
    </nav>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn
});

export default connect( mapStateToProps, { } )(Nav);
