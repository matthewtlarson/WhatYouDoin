import React from 'react';
// import { Link } from 'react-router-dom';

const UserEventsFeed = ({
    events,
    username,
    // description,
    // eventAuthor, 
    // date,
    // address,
}) => {
    if (events.length) {
        return (
            <>
                {events &&
                 events.map((event) => (
                    <div key={event._id} className="card text-center" style={{width: '75%', marginLeft: '12%'}}>
                    <div className="card-header">
                        <h2>Event-Title {event.title} </h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Event-Date: {event.date}</h5>
                        <p className="card-text">Event-Description: {event.description}</p>
                        <p>Event-Address: {event.address}</p>
                    </div>
                    <div className="card-footer text-muted">
                        Event-Author: {event.eventAuthor} // Event-CreatedAt: {event.createdAt}
                    </div>
                </div>
                 ))}
                
            </>
        )
    }
    return <h3>no events</h3>
};

export default UserEventsFeed;