import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";

import Auth from "../utils/auth";
import UserProfile from "../components/UserProfile";
import UserFriendsFeed from "../components/UserFriendsFeed";
import logo from "../assets/img/logo.png"


const Friends = () => {
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
                        <div style={{ marginTop: '10%', textAlign: 'center', }}>
                            <div>
                            <Link to='/'> <Button style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh' }} variant='warning'>Events</Button> </Link>
                            </div>
                            <div>
                                <Button style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh' }} variant='warning'>Friends</Button>
                            </div>
                            <div>
                                <Button style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh' }} variant='warning'>Groups</Button>
                            </div>
                            <div className=" mt-auto" style={{ marginBottom: '10%' }}>
                        <button type="button" className="btn btn-warning mt-4" style={{ width: '20vh', borderStyle: 'solid', marginTop: '2vh', }}>
                            <a href="/" onClick={() => Auth.logout()}>
                                Logout
                            </a>
                        </button>
                    </div>
                        </div>
                    </div>

                    
                </Col>


                <Col
                    sm={8}
                    style={{ background: "orange" }}
                    className="d-flex flex-grow-1"
                >
                    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', backgroundColor: 'white' }}>
                    <UserFriendsFeed />
                    </div>
                </Col>

                <Col sm={2} style={{ background: "grey", }} className="d-flex flex-grow-1">
                    <UserProfile />

                </Col>

            </Row>
        </Container>
    )
}

export default Friends;