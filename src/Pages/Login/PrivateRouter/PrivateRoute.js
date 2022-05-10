import React from 'react';
import { Redirect } from 'react-router-dom';
import { Route } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner'

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  if (isLoading) {
    return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Spinner animation="border" variant="primary" />
    </div>
  }
  return (
    <>
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    </>
  );
};

export default PrivateRoute;