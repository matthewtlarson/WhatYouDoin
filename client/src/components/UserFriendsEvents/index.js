import React from "react";
const UserFriendsEvents = ({ friends }) => {
  if (friends.length) {
    return (
      <>
        {friends &&
          friends.map((friend) =>
            friend.events.map((event) => (
              <div
                key={event._id}
                className="card text-center"
                style={{
                  width: "80%",
                  marginLeft: "11%",
                  marginBottom: "15px",
                  boxShadow: "5px 5px black",
                }}
              >
                <div className="card-header">
                  <h2>Event-Title {event.title} </h2>
                </div>
                <div className="card-body">
                  <h5 className="card-title">Event-Date: {event.date}</h5>
                  <p className="card-text">
                    Event-Description: {event.description}
                  </p>
                  <p>Event-Address: {event.address}</p>
                </div>
                <div className="card-footer text-muted">
                  Event-Author: {event.eventAuthor} // Event-CreatedAt:{" "}
                  {event.createdAt}
                </div>
              </div>
            ))
          )}
      </>
    );
  }
  return <h3>no friend events</h3>;
};
export default UserFriendsEvents;
