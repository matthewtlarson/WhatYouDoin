import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

import Auth from "../utils/auth";
import UserProfile from "../components/UserProfile";
import UserFriendsFeed from "../components/UserFriendsFeed";
import logo from "../assets/img/logo.png";

const Friends = () => {
  return (
    <Container fluid="true">
      <Row className="row justify-content-between">
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
                <Link to="/">
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
                </Link>
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
          style={{ background: "white" }}
          className="d-flex flex-grow-1"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "100%",
              backgroundColor: "white",
            }}
          >
            <UserFriendsFeed />
          </div>
        </Col>

        <Col
          sm={2}
          style={{ background: "white" }}
          className="d-flex flex-grow-1"
        >
          <UserProfile />
        </Col>
      </Row>
    </Container>
  );
};

export default Friends;
