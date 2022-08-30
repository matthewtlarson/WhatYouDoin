import React from "react";
// import { Link } from 'react-router-dom';

const UserEventsFeed = ({ events }) => {
  if (!events.length) {
    return <h3>No event's here!</h3>;
  }
  return (
    <>
      {events &&
        events.map((event) => (
          <div
            key={event._id}
            className="card text-center mt-3"
            style={{
              width: "80%",
              marginLeft: "11%",
              marginBottom: "15px",
              boxShadow: "5px 5px black",
            }}
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
