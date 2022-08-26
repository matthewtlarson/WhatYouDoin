import React from "react";
import { Link } from "react-router-dom";
import UserProfile from "../components/UserProfile";
import UserFeed from "../components/UserFeed";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Auth from "../utils/auth";

const Home = () => {
  return (
    <Container>
      <Row className="row justify-content-between">
        <Col
          sm={2}
          style={{ background: "grey", minHeight: "90vh", marginTop: 25 }}
        >
          Test This sidebar out
        </Col>
        {Auth.loggedIn() ? (
          <>
            <Col
              sm={3}
              style={{ background: "orange" }}
              className="d-flex flex-grow-1"
            >
              <UserFeed />
            </Col>
            <Col sm={3} style={{ background: "red" }}>
              <UserProfile />
            </Col>
          </>
        ) : (
          <Col
            sm={8}
            style={{ background: "orange", marginTop: 25 }}
            className="text-center d-flex justify-content-center"
          >
            <div style={{ marginTop: "15%" }}>
              {" "}
              <Login />{" "}
            </div>
            <br />
            <div style={{ marginTop: "15%" }}>
              {" "}
              <Signup />{" "}
            </div>
          </Col>
        )}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="footer-col col">
                <h4>Team</h4>
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
                    <a href="https://github.com/maximus-cristian">Maximus</a>
                  </li>
                  <li>
                    <a href="https://github.com/RPAPE3">Robby</a>
                  </li>
                  <li>
                    <a href="https://github.com/ryrathb">Ryan</a>
                  </li>
                  <li>
                    <a href="https://github.com/sheinen22">Stephen</a>
                  </li>
                </ul>
              </div>
              <div className="footer-col col">
                <h4>Learn More</h4>
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
              </div>
              <div className="footer-col col">
                <h4>Meet Us</h4>
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
              </div>
              <div className="footer-col col">
                <h4>Contact Us</h4>
                <div className="social-links">
                  <a href="https://twitter.com/GroupWyd">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="https://www.instagram.com/groupwyd/">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Row>
    </Container>
  );
};

export default Home;
