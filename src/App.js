import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route, Redirect, withRouter} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


import Nav from './components/Nav';
import Login from './components/forms/Login';
import Logout from './components/Logout';
import Register from './components/forms/Register';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import UpdateProfile from './components/forms/UpdateProfile';
import DailyApprovals from './components/DailyApprovals';
import DailyReports from './components/DailyReports';
import HabitsList from './components/HabitsList';
import Habit from './components/Habit';
import UpdateHabit from './components/forms/UpdateHabit';
import CreateHabit from './components/forms/CreateHabit';
import CreateCategory from './components/forms/CreateCategory';

import './App.css';
import { getUserData, getCategoryList } from './actions';

class App extends Component {

  componentDidMount() {
    this.props.getUserData(localStorage.getItem('userId'))
    this.props.getCategoryList()
  }

  helper = () => {
   if(this.props.isLoggedIn == false) {
     if(this.props.location.pathname !== "/login" && this.props.location.pathname !== "/register" && this.props.location.pathname !== "/" && this.props.location.pathname !== "/logout") {
       this.props.history.push('/login')
     }
   }
 }

  render() {
    return (
      <div className="App">
        <Nav />
        <Route path='/login' component={Login} />
        <Route path='/logout' component={Logout} />
        <Route path='/register' component={Register} />
        <Route exact path='/' component={ () => { window.location.href='https://life-gpa-mcknight.netlify.com'; return null } }/>
        <PrivateRoute path="/dashboard/:id" component={Dashboard} />
        <PrivateRoute path="/profile/:id" component={Profile} />
        <PrivateRoute path="/update-profile" component={UpdateProfile} />
        <PrivateRoute path='/daily-reports/' component={DailyReports} />
        <PrivateRoute path='/daily-approvals/' component={DailyApprovals} />
        <PrivateRoute path='/habits-list' component={HabitsList} />
        <PrivateRoute path='/habit/:id' component={Habit} />
        <PrivateRoute path='/create-habit' component={CreateHabit} />
        <PrivateRoute path='/create-category' component={CreateCategory} />
        <PrivateRoute path='/update-habit' component={UpdateHabit} />
      </div>
    );
  }

}

const mapStateToProps = state => ({
  isLoggedIn: state.loginReducer.isLoggedIn
});

export default connect( mapStateToProps , { getUserData, getCategoryList } )(withRouter(App));
