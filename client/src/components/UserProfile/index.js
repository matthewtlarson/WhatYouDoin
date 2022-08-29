import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import logo from "../../assets/img/logo.png"

import { QUERY_USER_DATA } from '../../utils/queries';

import Auth from '../../utils/auth';

const Profile = () => {

  const profile = Auth.getProfile()
  const { loading, data } = useQuery(QUERY_USER_DATA, {
    variables: { email: profile.data.email }
  })

  const user = data?.me || data?.user || {};

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
    <div>
      <div style={{textAlign: 'center'}}>
        <Image style={{width: '12vh', marginBottom: '1vh', marginTop: '1vh'}} fluid="true" src={logo}/>
        <Button style={{width: '11vh', margin: '3vh', backgroundColor: '#541675', color: 'white', borderColor: 'grey'}} variant="warning">Full Profile</Button>{' '}
      </div>
      <div style={{borderWidth: '5px', borderStyle: 'solid'}}>
        <h1 style={{textAlign: 'center'}}> {user.username} </h1>
        <ul style={{listStyleType: 'none'}}>
          <li>Friends: { user.connections.length} </li>
          <li>Connections: </li>
          <li>Events: {user.events.length} </li>
          <li>Flake Rating: </li>
        </ul>
      </div>
    </div>
  );
};

export default Profile;
