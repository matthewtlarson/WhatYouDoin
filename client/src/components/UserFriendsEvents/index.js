import React from 'react';

const UserFriendsEvents = ({
    friends,
}) => {
    



    if (friends.length) {
        return (
            <>
                {friends &&
                 friends.map((friend) => (
                    <div key={friend.events._id} className="card text-center" style={{width: '75%', marginLeft: '12%'}}>
                    <div className="card-header">
                        <h2>Event-Title {friend.username} </h2>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Event-Date: {friend.events.date}</h5>
                        <p className="card-text">Event-Description: {friend.events.description}</p>
                        <p>Event-Address: {friend.events.address}</p>
                    </div>
                    <div className="card-footer text-muted">
                        Event-Author: {friend.events.eventAuthor} // Event-CreatedAt: {friend.events.createdAt}
                    </div>
                </div>
                 ))}
                
            </>
        )
    }
    return <h3>no friend events</h3>
};

export default UserFriendsEvents;