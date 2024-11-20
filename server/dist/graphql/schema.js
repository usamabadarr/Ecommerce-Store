import { gql } from "apollo-server-express";
const typeDefs = gql `
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

  type Thought {
    id: ID!
    content: String!
    createdBy: User!
  }

  input ThoughtInput {
    content: String!
  }

  type Query {
    getProducts: [Product]
    getThoughts: [Thought]
  }

  type Mutation {
    register(username: String!, email: String!, password: String!): User
    login(email: String!, password: String!): User
    addThought(input: ThoughtInput!): Thought
  }
`;
export default typeDefs;

