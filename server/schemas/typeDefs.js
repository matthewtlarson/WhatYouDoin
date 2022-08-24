const { gql } = require('apollo-server-express');

const typeDefs = gql`

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    me: User #we can delete this once other Query's are added. Just needed this as a place holder for the login/sign up feature. 
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;