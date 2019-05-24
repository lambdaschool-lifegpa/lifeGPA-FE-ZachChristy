import React, { Component } from 'react';
import { connect } from "react-redux";
import { NavLink, withRouter } from 'react-router-dom';
import Loader from 'react-loader-spinner'

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

  clickHandler = () => {
    this.props.history.push(`/profile/${localStorage.getItem('userId')}`)
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

            { (localStorage.getItem('userId') && this.props.userData) ?

                (<UserNavInfoConatiner>
                  {this.props.userData.userImgUrl ? <UserNavImg src={`${this.props.userData.userImgUrl}`} ></UserNavImg>
                    : <Loader type="ThreeDots" color="black" height={10} width={10} />
                  }
                  <span onClick={this.clickHandler}>{this.props.userData.username}</span>
                </UserNavInfoConatiner>)

                : <NavLink to='/register'><Register>Register</Register></NavLink> }

          </NavbarRight>
        </Navbar>
      </NavbarContainer>
    );
  }
}

const mapStateToProps = state => ({
  userData: state.fetchUserDataReducer.userData,
  fetchingData: state.fetchUserDataReducer.fetchingData
});

export default connect( mapStateToProps, { } )(withRouter(Nav));
