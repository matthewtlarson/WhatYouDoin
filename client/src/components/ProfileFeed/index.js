import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import Button from "react-bootstrap/Button";
import Collapse from "react-bootstrap/Collapse";

import UserEventsFeed from "../UserEventsFeed";

import { QUERY_USER_DATA } from "../../utils/queries";

import Auth from "../../utils/auth";

const ProfileFeed = () => {
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
        <div style={{ background: "grey" }}>
          <UserEventsFeed events={user.events} username={user.username} />
        </div>
      </div>
    </>
  );
};

export default ProfileFeed;
