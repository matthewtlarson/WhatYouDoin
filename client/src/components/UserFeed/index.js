import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";
import { CREATE_EVENT } from "../../utils/mutations";
import UserEventsFeed from "../UserEventsFeed";
import { QUERY_EVENT, QUERY_USER, QUERY_USER_DATA } from "../../utils/queries";

import Auth from "../../utils/auth";

const UserFeed = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [address, setAddress] = useState("");

  const [addEvent, { error }] = useMutation(CREATE_EVENT, {
    update(cache, { data: { addEvent } }) {
      try {
        const { event } = cache.readQuery({ query: QUERY_EVENT });

        cache.writeQuery({
          query: QUERY_EVENT,
          data: { events: [addEvent, ...event] },
        });
      } catch (e) {
        console.error(e);
      }

      const { user } = cache.readQuery({ query: QUERY_USER_DATA });
      cache.writeQuery({
        query: QUERY_USER_DATA,
        data: { user: { ...user, events: [...user.events, addEvent] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addEvent({
        variables: {
          title,
          description,
          date,
          address,
          eventAuthor: Auth.getProfile().data.email,
        },
      });

      setTitle("");
      setDescription("");
      setDate("");
      setAddress("");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "description" && value.length <= 280) {
      setDescription(value);
    } else if (name === "title") {
      setTitle(value);
    } else if (name === "date") {
      setDate(value);
    } else if (name === "address") {
      setAddress(value);
    }
  };

  const [open, setOpen] = useState(false);

  function refreshComponent() {
    window.location.reload(false);
  }

  const profile = Auth.getProfile();
  const { loading, data } = useQuery(QUERY_USER_DATA, {
    variables: { email: profile.data.email },
  });

  const user = data?.me || data?.user || {};
  const events = data?.user.events || [];

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
            <form
              style={{ width: "100%", backgroundColor: "#979dac" }}
              onSubmit={handleFormSubmit}
            >
              <div className="form-group border border-primary p-3 mb-2 text-dark text-center collpase">
                <div>
                  <textarea
                    // name="text"
                    name="title"
                    // class="form-control"
                    className="form-input"
                    style={{ height: "100px" }}
                    placeholder="Title"
                    value={title}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <textarea
                    // name="text"
                    name="description"
                    // class="form-control"
                    className="form-input"
                    style={{ height: "100px" }}
                    placeholder="Description of Event"
                    value={description}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <textarea
                    // type="text"
                    name="date"
                    // class="form-control"
                    className="form-input"
                    style={{ height: "100px" }}
                    placeholder="Date/Time of your event?"
                    value={date}
                    onChange={handleChange}
                  ></textarea>
                </div>
                <div>
                  <textarea
                    // type="text"
                    name="address"
                    // class="form-control"
                    className="form-input"
                    style={{ height: "100px" }}
                    placeholder="Event Location"
                    value={address}
                    onChange={handleChange}
                  ></textarea>
                </div>
                {/* <div class="form-check form-check-inline">
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
                </div> */}
              </div>
              <button
                type="submit"
                onClick={refreshComponent}
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
