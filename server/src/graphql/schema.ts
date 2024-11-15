import { gql } from "apollo-server-express";

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
    token: String
  }

  type Product {
    id: ID!
    name: String!
    price: Float!
    description: String
    stock: Int!
  }

  type Query {
    getProducts: [Product]
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
  }
`;

export default typeDefs;
