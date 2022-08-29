import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { CREATE_EVENT } from "../../utils/mutations";
import UserEventsFeed from "../UserEventsFeed";

import { QUERY_USER_DATA } from "../../utils/queries";

import Auth from "../../utils/auth";

const UserFeed = () => {

  
  const [open, setOpen] = useState(false);

  const profile = Auth.getProfile();
  const { loading, data } = useQuery(QUERY_USER_DATA, {
    variables: { email: profile.data.email },
  });

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
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <Button
          className="fs-3"
          style={{
            height: "100px",
            width: "100%",
            marginTop: "30px",
            backgroundColor: "#979dac",
            color: "black",
          }}
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
        >
          click me to post an event!
        </Button>
        <Collapse in={open}>
          <div id="example-collapse-text">
            <form style={{ width: "100%", backgroundColor: "#979dac" }}>
              <div className="form-group border border-primary p-3 mb-2 text-dark text-center collpase">
                <input
                  type="text"
                  class="form-control"
                  style={{ height: "100px" }}
                  placeholder="enter a description for your event here"
                />
                <input
                  type="text"
                  class="form-control"
                  style={{ height: "100px" }}
                  placeholder="Date/Time of your event?"
                />
                <input
                  type="text"
                  class="form-control"
                  style={{ height: "100px" }}
                  placeholder="where is the event being held?"
                />
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio1"
                    value="option1"
                  />
                  <label class="form-check-label" for="inlineRadio1">
                    Private Event
                  </label>
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    name="inlineRadioOptions"
                    id="inlineRadio2"
                    value="option2"
                  />
                  <label class="form-check-label" for="inlineRadio2">
                    Public Event
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-primary p-3 mb-2 bg-danger text-white"
                style={{ width: "50%", marginLeft: "25%" }}
              >
                Post Event!
              </button>
            </form>
          </div>
        </Collapse>

        <div style={{ background: "grey" }}>
          <UserEventsFeed events={user.events} username={user.username} />
        </div>
      </div>
    </>
  );
};

export default UserFeed;
