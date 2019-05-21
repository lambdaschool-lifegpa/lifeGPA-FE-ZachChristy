import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

import { NavbarContainer, Navbar, NavbarLeft, NavbarRight } from '../styles'

function Nav(props) {
  return (
    <NavbarContainer>
      <Navbar>
        <h1>LifeGPA</h1>
        <NavbarLeft>
          <NavLink to='/dashboard/:id'><div>Dashboard</div></NavLink>
          <NavLink to='/daily-reports'><div>Daily Reports</div></NavLink>
          <NavLink to='/daily-approvals'><div>Daily Approvals</div></NavLink>
          <NavLink to='/habits-list'><div>List Of Habits</div></NavLink>
        </NavbarLeft>
        <NavbarRight>
          { !localStorage.getItem('token') ?
            <NavLink to='/login'><div>Log In</div></NavLink>
              : <NavLink to='/logout'><div>Log Out</div></NavLink> }
          <NavLink to='/register'><div>Register</div></NavLink>
        </NavbarRight>
      </Navbar>
    </NavbarContainer>
  );
}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn
});

export default connect( mapStateToProps, { } )(Nav);
