import React from 'react';
import { Navigate, useParams, Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "../assets/img/logo.png"
import Auth from "../utils/auth";
import Button from 'react-bootstrap/Button'

const FullProfile = () => {
return (
    <Container>
        <Row>
        <Col
              sm={2}
              style={{ background: "grey", minHeight: "90vh", marginLeft: '50px' }} className=" position-relative"
              >
              <div>
                <div>
                  <Image style={{ width: '12vh', marginLeft: '25%', marginBottom: '1vh', marginTop: '1vh', }} fluid="true" src={logo} />
                </div>
                <div style={{ marginTop: '10%', textAlign: 'center',  }}>
                  <div>
                    <Button style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh' }} variant='warning'>Events</Button>
                  </div>
                  <div>
                    <Button style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh' }} variant='warning'>Friends</Button>
                  </div>
                  <div>
                    <Button style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh' }} variant='warning'>Groups</Button>
                  </div>
                </div>
              </div>
              <div className=" position-absolute bottom-0 start-50 translate-middle-x" style={{marginBottom: '10%'}}>
                <button type="button" className="btn btn-warning mt-4" style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh', }}>
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
                </button>
              </div>
            </Col>
            <Col className="col-3" style={{marginTop: "3vh"}}>
                <div style={{textAlign: 'center', backgroundColor: 'grey'}}>
                    <Image style={{width: '12vh', marginBottom: '1vh', marginTop: '1vh'}} fluid="true" src={logo}/>
                    <Link to="/fullProfile" style={{width: '11vh', margin: '3vh'}} variant="warning">Full Profile</Link>
                </div>
                <div style={{borderWidth: '3px', borderStyle: 'solid'}}>
                    <h1 style={{textAlign: 'center'}}>sheinen22</h1>
                    <ul style={{listStyleType: 'none'}}>
                    <li>Friends: </li>
                    <li>Connections: </li>
                    <li>Events: </li>
                    <li>Flake Rating: </li>
                    </ul>
                </div>
                <div style={{borderWidth: '3px', borderStyle: 'solid', marginTop: '5vh', marginBottom: '3vh', backgroundColor: 'grey'}}>
                    <h4 style={{textAlign: 'center'}}>Pictures from Events</h4>
                    <p style={{textAlign: "center"}}>No Pictures</p>
                    <p style={{textAlign: "right", textJustify: 'center'}}>View All</p>
                </div>
            </Col>
            <Col fluid='true' className="col-7" style={{backgroundColor: 'grey', marginTop: '3vh'}}>
               <h1 style={{textAlign: 'center'}}>Events</h1>
            </Col>
        </Row>
    </Container>
    
)}

export default FullProfile;