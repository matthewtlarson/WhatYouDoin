import React from "react";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";

import UserProfile from "../components/UserProfile";
import UserFeed from "../components/UserFeed";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import logo from "../assets/img/logo.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import Button from "react-bootstrap/Button";

const Home = () => {
  return (
    <Container fluid="true">
      <Row className="row justify-content-between">
        {Auth.loggedIn() ? (
          <>
            <Col
              sm={2}
              style={{
                background: "white",
                minHeight: "90vh",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                border: "2px solid grey",
              }}
              className="d-flex flex-grow-1"
            >
              <div>
                <div>
                  <Image
                    style={{
                      width: "12vh",
                      marginLeft: "12%",
                      marginBottom: "1vh",
                      marginTop: "1vh",
                    }}
                    fluid="true"
                    src={logo}
                  />
                </div>
                <div style={{ marginTop: "10%", textAlign: "center" }}>
                  <div>
                    <Button
                      style={{
                        width: "20vh",
                        borderStyle: "solid",
                        borderColor: "black",
                        marginTop: "2vh",
                        backgroundColor: "#a64dff",
                        boxShadow: "5px 5px grey",
                        color: "white",
                      }}
                      variant="warning"
                    >
                      Events
                    </Button>
                  </div>
                  <div>
                    <Link to="/friends">
                      {" "}
                      <Button
                        style={{
                          width: "20vh",
                          borderStyle: "solid",
                          borderColor: "black",
                          marginTop: "2vh",
                          backgroundColor: "#a64dff",
                          boxShadow: "5px 5px grey",
                          color: "white",
                        }}
                        variant="warning"
                      >
                        Friends
                      </Button>
                    </Link>
                  </div>
                  <div>
                    <Button
                      style={{
                        width: "20vh",
                        borderStyle: "solid",
                        borderColor: "black",
                        marginTop: "2vh",
                        backgroundColor: "#a64dff",
                        boxShadow: "5px 5px grey",
                        color: "white",
                      }}
                      variant="warning"
                    >
                      Groups
                    </Button>
                  </div>
                  <div className=" mt-auto" style={{ marginBottom: "10%" }}>
                    <button
                      type="button"
                      className="btn mt-4"
                      style={{
                        width: "20vh",
                        borderStyle: "solid",
                        marginTop: "2vh",
                        backgroundColor: "#a64dff",
                        borderColor: "black",
                        boxShadow: "5px 5px grey",
                        color: "white",
                      }}
                    >
                      {/* this is not using the Link component to logout or user and then refresh the application to the start */}
                      <a
                        href="/"
                        style={{ color: "white" }}
                        onClick={() => Auth.logout()}
                      >
                        Logout
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </Col>

            <Col
              sm={8}
              style={{ background: "white", border: "2px solid grey" }}
              className="d-flex flex-grow-1"
            >
              <UserFeed />
            </Col>

            <Col
              sm={2}
              style={{ background: "white", border: "2px solid grey" }}
              className="d-flex flex-grow-1"
            >
              <UserProfile />
            </Col>
            <footer className="footer" style={{ backgroundColor: "black" }}>
              <Container>
                <Row>
                  <Col className="footer-col">
                    <h4 style={{ color: "white" }}>Team</h4>
                    <ul>
                      <li>
                        <a href="https://github.com/BrandtDavidson">Brandt</a>
                      </li>
                      <li>
                        <a href="https://github.com/dvtipei">Denis</a>
                      </li>
                      <li>
                        <a href="https://github.com/matthewtlarson">Matthew</a>
                      </li>
                      <li>
                        <a href="https://github.com/maximus-cristian">
                          Maximus
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/RPAPE3">Robert</a>
                      </li>
                      <li>
                        <a href="https://github.com/ryrathb">Ryan</a>
                      </li>
                      <li>
                        <a href="https://github.com/sheinen22">Stephen</a>
                      </li>
                    </ul>
                  </Col>
                  <Col className="footer-col">
                    <h4 style={{ color: "white" }}>Learn More</h4>
                    <ul>
                      <li>
                        <a href="#">Manifesto</a>
                      </li>
                      <li>
                        <a href="#">Works</a>
                      </li>
                      <li>
                        <a href="#">Stories</a>
                      </li>
                    </ul>
                  </Col>
                  <Col className="footer-col">
                    <h4 style={{ color: "white" }}>Meet Us</h4>
                    <ul>
                      <li>
                        <a href="#">Studio</a>
                      </li>
                      <li>
                        <a href="#">Community</a>
                      </li>
                      <li>
                        <a href="#">Workshops</a>
                      </li>
                    </ul>
                  </Col>
                  <Col className="footer-col">
                    <h4 style={{ color: "white" }}>Contact Us</h4>
                    <div className="social-links">
                      <a
                        style={{ color: "white" }}
                        href="https://twitter.com/GroupWyd"
                      >
                        <i className="fab fa-twitter"></i>
                      </a>
                      <a
                        style={{ color: "white" }}
                        href="https://github.com/RPAPE3/WYD"
                      >
                        <i className="fab fa-github"></i>
                      </a>
                      <a
                        style={{ color: "white" }}
                        href="https://www.instagram.com/groupwyd/"
                      >
                        <i className="fab fa-instagram"></i>
                      </a>
                    </div>
                  </Col>
                </Row>
              </Container>
            </footer>
          </>
        ) : (
          <>
            <Col
              sm={2}
              style={{
                background: "#a64dff",
                minHeight: "100vh",
                marginLeft: "100px",
                color: "black",
                border: "3px solid black",
              }}
            >
              <Image
                style={{
                  width: "auto",
                  height: "auto",
                  marginBottom: "1vh",
                  marginTop: "1vh",
                  display: "block",
                  marginLeft: "59px",
                  marginRight: "auto",
                }}
                fluid="true"
                src={logo}
              />

              <div
                style={{ marginTop: "100%", fontFamily: "roboto" }}
                className="text-center"
              >
                <h1 style={{ fontFamily: "Bubblegum Sans" }}> Welcome!</h1>
                <br />
                <h6 style={{ fontStyle: "italic" }}>
                  {" "}
                  Whatever you’re looking to do this year, WYD can help. For
                  years, people have turned to WYD to meet people, make friends,
                  find support, and explore their interests. Thousands of events
                  are happening every day—join in on the fun!
                </h6>
              </div>
            </Col>

            <Col
              sm={9}
              style={{ background: "#FDFDFc" }}
              className="text-center d-flex justify-content-center"
            >
              <div
                style={{
                  marginTop: "10%",
                  marginRight: "7%",
                  marginBottom: "25%",
                }}
              >
                {" "}
                <Login />{" "}
              </div>
              <br />
              <div style={{ marginTop: "10%", marginBottom: "25%" }}>
                {" "}
                <Signup />{" "}
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default Home;
