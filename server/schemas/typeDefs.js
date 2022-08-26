const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String!
    lastName: String
    email: String!
    username: String
    profilePicture: String
    area: String!
    birthday: String
    flakeRating: String
    publicRequests: String
    userRequests: String
    connections: [Connection]
  }

  type Connection {
    selfUsername: String!
    otherUsername: String
    closeFriend: Boolean
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
  }

  type Recap {
    image: String
    eventDescription: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User
    user(email: String!): User
    users: [User]
    username: [User]
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;