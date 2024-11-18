import express from "express";
import { ApolloServer } from "apollo-server-express";
import connectDB from "./config/db";
import typeDefs from "./graphql/schema";
import resolvers from "./graphql/resolvers";

const app = express();

// Connect Database
connectDB();

// GraphQL Server
const server = new ApolloServer({ typeDefs, resolvers });
await server.start();
server.applyMiddleware({ app });

export default app;

