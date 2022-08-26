import React from "react";
import { Link } from 'react-router-dom';
import UserProfile from "../components/UserProfile"
import UserFeed from "../components/UserFeed"
import Login from "../pages/Login"
import Signup from "../pages/Signup"

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Auth from '../utils/auth';

const Home = () => {
  return (
    <Container fluid='true'>
      <Row className='row justify-content-between' >
        <Col sm={2} style={{ background: 'grey', minHeight: '90vh', marginLeft: '50px'}}>
          Test This sidebar out
        </Col>


        {Auth.loggedIn() ? (
          <>

            <Col sm={3} style={{ background: 'white' }} className='d-flex flex-grow-1'>
              <UserFeed />
            </Col>
            <Col sm={2} style={{ background: 'grey', marginRight: '50px' }}>
              <UserProfile />
            </Col>
          </>
        ) : (
          <Col sm={8} style={{ background: 'gold', marginTop: 25, }} className='text-center d-flex justify-content-center'> 
          <div style={{marginTop: '15%'}}> <Login /> </div>
          <br/>
          <div style={{marginTop: '15%'}}> <Signup /> </div>
          </Col>
        )}
      </Row>
    </Container>
  )
}

export default Home;