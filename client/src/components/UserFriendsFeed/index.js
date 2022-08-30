import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";

import UserFriends from "../UserFriends/UserFriends";
import logo from "../../assets/img/logo.png";

import UserEventsFeed from "../UserEventsFeed";
import Image from "react-bootstrap/Image";

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

  if (!user.friends.length) {
    return <h3>No Friends Yet!</h3>;
  }

  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div style={{ background: "#a64dff" }}>
        <h1 className="text-center"> {user.username} Friends List:</h1>
      </div>

      <UserFriends friends={user.friends} />
    </div>
  );
};

export default UserFeed;
