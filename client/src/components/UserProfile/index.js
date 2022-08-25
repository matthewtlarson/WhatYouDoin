import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import logo from "../../assets/img/logo.png"

import { QUERY_USER, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const Profile = () => {
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
    <div style={{backgroundColor: 'grey'}}>
      <div style={{textAlign: 'center'}}>
        <Image style={{width: '15vh', marginBottom: '1vh'}} className="col-6" fluid="true" roundedCircle="true" src={logo}/>
        <Button style={{width: '11vh', margin: '3vh'}} variant="warning">Full Profile</Button>{' '}
      </div>
      <Container className="col-3"style={{borderWidth: '5px', borderStyle: 'solid'}}>
        <h1 style={{textAlign: 'center'}}>sheinen22</h1>
        <ul style={{listStyleType: 'none'}}>
          <li>Friends: </li>
          <li>Connections: </li>
          <li>Events: </li>
          <li>Flake Rating: </li>
        </ul>
      </Container>
    </div>
  );
};

export default Profile;
