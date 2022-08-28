import React from 'react';
// import { Link } from 'react-router-dom';

const UserEventsFeed = ({
    events,
    username,
    author,
    // description,
    // eventAuthor, 
    // date,
    // address,
}) => {
    if (events.length) {
        return (
            // <div>
                <div className="card text-center" style={{width: '75%', marginLeft: '12%'}}>
                    <div className="card-header">
                        <h2>Event-Title {author} {username}</h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Event-Date</h5>
                        <p className="card-text">*******Event-Description*******</p>
                        <p>Event-Address</p>
                    </div>
                    <div className="card-footer text-muted">
                        Event-Author // Event-CreatedAt
                    </div>
                </div>
            // </div>
        )
    }
    return <h3>no events</h3>
}

export default UserEventsFeed;