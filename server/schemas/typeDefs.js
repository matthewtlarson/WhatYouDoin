const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String!
    lastName: String
    username: String
    email: String!
    profilePicture: String
    area: String!
    birthday: String
    flakeRating: String
<<<<<<< HEAD
    publicRequests: String
    userRequests: String
    connections: [Connection]
=======
    events: [Event]!
    connections: [Connection]
  }
  type Event {
    _id: ID
    title: String
    date: String
    eventAuthor: String
    description: String
    createdAt: String
>>>>>>> 0dcfa8971e568a4ae44720e7849efeb031190528
  }

  type Connection {
    selfUsername: String!
    otherUsername: String
    closeFriend: Boolean
<<<<<<< HEAD
    # connections: [String] per Rachel 
  }


  type Event {
    createdAt: String!
    time: String
    title: String
    commitments: [String]
    flake: [String]
    theme: String
    active: String
    author: String  #change string to User. we could pull event by ID and find author user and find their list of connections. 
    description: String
    address: String
    private: String
    image: String
=======
  }

  type Group {
    title: String
    members: [User]
    events: [Event]
>>>>>>> 0dcfa8971e568a4ae44720e7849efeb031190528
  }

  type Recap {
    _id: ID
    image: String
    eventDescription: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    user(username: String!): User
    users: [User]
    username: [User]
    # events: Event
    # events: [Event]
    events(username: String): [Event]
    event(eventId: ID!): Event
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addEvent(description: String!, eventAuthor: String!): Event
  }
`;

module.exports = typeDefs;