import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_USER, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const UserFeed = () => {
  const { email: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { email: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if email is yours
  if (Auth.loggedIn() && Auth.getProfile().data.email === userParam) {
    return <Navigate to="/" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.email) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }

  return (
        <form style={{width: '100%', marginTop: '30px'}}>
          <div className="form-group border border-primary p-3 mb-2 text-dark text-center" style={{backgroundColor: 'grey'}}>
            <label for="exampleTextarea1"><h3>Have an event coming up?</h3></label>
            <input type="text" class="form-control" style={{height: '100px'}} placeholder="enter the details for your event here" />
          </div>
          <button type="submit" className="btn btn-primary p-3 mb-2 bg-danger text-white" style={{width: '50%', marginLeft: '25%'}}>Post Event!</button>
        </form>
  );
};

export default UserFeed;