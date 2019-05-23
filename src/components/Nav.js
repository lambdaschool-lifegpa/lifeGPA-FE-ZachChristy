import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink } from 'react-router-dom';

import { getUserData } from '../actions'

import { NavbarContainer,
         Navbar,
         NavbarLeft,
         NavbarRight,
         Login,
         Register,
         UserNavInfoConatiner,
         UserNavImg
       } from '../styles'

class Nav extends Component {

  componentDidMount() {
    this.props.getUserData(localStorage.getItem('userId'))
  }

  render() {
    return (
      <NavbarContainer>
        <Navbar>
          <h1>LifeGPA</h1>
          <NavbarLeft>
            <NavLink to={`/dashboard/${localStorage.getItem('userId')}`}><div>Dashboard</div></NavLink>
            <NavLink to='/daily-reports'><div>Daily Reports</div></NavLink>
            <NavLink to='/daily-approvals'><div>Daily Approvals</div></NavLink>
            <NavLink to='/habits-list'><div>List Of Habits</div></NavLink>
          </NavbarLeft>
          <NavbarRight>

            { localStorage.getItem('userId') ?

              <NavLink to='/logout'><Login>Log Out</Login></NavLink>

                : <NavLink to='/login'><Login>Log In</Login></NavLink> }

            { localStorage.getItem('userId') ?

                (<UserNavInfoConatiner>
                  <UserNavImg src={`${this.props.userData.userImgUrl}`} ></UserNavImg>
                  <span>{this.props.userData.username}</span>
                </UserNavInfoConatiner>)

                : <NavLink to='/register'><Register>Register</Register></NavLink> }

          </NavbarRight>
        </Navbar>
      </NavbarContainer>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData
});

export default connect( mapStateToProps, { getUserData } )(Nav);
