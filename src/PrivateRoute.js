import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log(localStorage)
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem('token') === '') {
          return <Redirect to="/login" />;
        } else {
          return <Component />;
        }
      }}
    />
  );
};

export default PrivateRoute;
