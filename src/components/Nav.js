import React from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

import { NavbarContainer,
         Navbar,
         NavbarLeft,
         NavbarRight,
         Login,
         Register,
         UserNavInfoConatiner,
         UserNavImg
       } from '../styles'

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
            <NavLink to='/login'><Login>Log In</Login></NavLink>
              : <NavLink to='/logout'><Login>Log Out</Login></NavLink> }
          { localStorage.getItem('token') ?
              (<UserNavInfoConatiner>
                <UserNavImg src={`${props.userData.userImgUrl}`} ></UserNavImg>
                <span>{props.userData.username}</span>
              </UserNavInfoConatiner>)
              : <NavLink to='/register'><Register>Register</Register></NavLink> }
        </NavbarRight>
      </Navbar>
    </NavbarContainer>
  );
}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData,
  isLoggedIn: state.loginReducer.isLoggedIn
});

export default connect( mapStateToProps, { } )(Nav);
