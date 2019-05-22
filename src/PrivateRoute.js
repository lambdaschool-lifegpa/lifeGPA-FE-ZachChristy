import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Loader from 'react-loader-spinner';

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if(props.loggingIn){
          return <Loader type="Rings" color="black" height="120" width="120" />
        } else {
          if (!localStorage.getItem('token')) {
            return <Redirect to="/login" />;
          } else {
            return <Component />;
          }
        }

      }}
    />
  );
};

export default PrivateRoute;
