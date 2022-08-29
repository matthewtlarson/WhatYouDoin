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
import ProfileFeed from "../components/ProfileFeed";
import FullProfileProf from '../components/FullProfileProf';
import pic1 from "../assets/img/pic1.png"
import pic2 from "../assets/img/pic2.png"
import pic3 from "../assets/img/pic3.png"
import pic4 from "../assets/img/pic4.png"

const FullProfile = () => {
return (
    <Container fluid='true'>
        <Row className="row justify-content-between">
        <Col
              sm={2}
              style={{ background: "grey", minHeight: "100vh", flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center' }} className="d-flex flex-grow-1"
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

              <div className=" mt-auto" style={{marginBottom: '10%'}}>
                <button type="button" className="btn btn-warning mt-4" style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh', }}>
                  {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                  <a href="/" onClick={() => Auth.logout()}>
                    Logout
                  </a>
                </button>
              </div>
            </Col>

            <Col sm={3} style={{marginTop: "3vh"}}>
                <FullProfileProf />
                <div style={{borderWidth: '3px', borderStyle: 'solid', marginTop: '5vh', marginBottom: '3vh', backgroundColor: 'grey', textAlign: 'center'}}>
                    <h4>Pictures from Events</h4>
                    {/* <p style={{textAlign: "center"}}>No Pictures</p> */}
                    <Image style={{width: '40vh', minHeight: '25vh'}} fluid="true" src={pic1}/>
                    <Image style={{width: '40vh', minHeight: '25vh'}} fluid="true" src={pic2}/>
                    <Image style={{width: '40vh', minHeight: '25vh'}} fluid="true" src={pic3}/>
                    <Image style={{width: '40vh', minHeight: '25vh'}} fluid="true" src={pic4}/>
                    <p>
                      <Button style={{textAlign: "right", textJustify: 'center'}}>View All</Button>
                    </p>
                </div>
            </Col>
            <Col sm={7} style={{ background: "grey", }} className="d-flex flex-grow-1">
              <ProfileFeed />
              
            </Col>
           
               
        </Row>
    </Container>
    
)}

export default FullProfile;