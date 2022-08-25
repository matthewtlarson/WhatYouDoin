import React from "react";
import { Link } from 'react-router-dom';
import UserProfile from "../components/UserProfile"
import UserFeed from "../components/UserFeed"
import UserSideNav from "../components/UserSideNav"

import Auth from '../utils/auth';

const Home = () => {
    return (
        <div>
            <h1>This div stays across all pages regardless if you are logged in or not.</h1>

            {Auth.loggedIn() ? (
        <>
        <br/>
          <UserProfile />
          <br/>
          <UserFeed />
          <br/>
          <UserSideNav />
        </>
      ) : (
        <p>
          You need to be logged in to view your profile. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
    )
}

export default Home;