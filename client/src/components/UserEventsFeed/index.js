import React from "react";
// import { Link } from 'react-router-dom';

const UserEventsFeed = ({
  events,
  username,
  description,
  eventAuthor,
  date,
  address,
}) => {
  if (!events.length) {
    return <h3>no events</h3>;
  }
  return (
    <>
      {events &&
        events.map((event) => (
          <div
            key={event._id}
            className="card text-center"
            style={{ width: "75%", marginLeft: "12%" }}
          >
            <div className="card-header">
              <h2>Event: {event.title} </h2>
            </div>
            <div className="card-body">
              <h5 className="card-title">Date: {event.date}</h5>
              <p className="card-text">Description: {event.description}</p>
              <p>Address: {event.address}</p>
            </div>
            <div className="card-footer text-muted">
              Owner: {event.eventAuthor} // Creation Date: {event.createdAt}
            </div>
          </div>
        ))}
    </>
  );
};

export default UserEventsFeed;
