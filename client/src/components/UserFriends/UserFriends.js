import React from 'react';
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'

import logo from "../../assets/img/logo.png"

const UserFriends = ({
    friends,
}) => {
    if (!friends.length) {
        return <h3>No Friends Yet</h3>
    }

    return (
        <>
            {friends &&
                friends.map((friend) => (
                    <div key={friend._id} className='row align-items-center' style={{ background: 'grey', marginTop: '5%' }} >

                        <div className="col-4 card" style={{ width: '18rem', marginLeft: '5%' }}>

                            <Image className="card-img-top" style={{ width: '12vh', marginLeft: '25%', marginBottom: '1vh', marginTop: '1vh', }} fluid="true" src={logo} />

                            <Button style={{ marginLeft: '30%', width: '11vh', backgroundColor: '#541675', color: 'white', borderColor: 'grey' }} variant="warning">Full Profile</Button>{' '}


                            <div className="card-body">
                                <h5 className="card-title">{friend.firstName} {friend.lastName} </h5>
                            </div>
                            <div>
                                <h5 className="card-title">{friend.username} </h5>
                            </div>
                        </div>
                    </div>

                ))}
        </>
    )
}

export default UserFriends;