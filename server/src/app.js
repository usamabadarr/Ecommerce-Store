"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var apollo_server_express_1 = require("apollo-server-express");
var db_1 = require("./config/db");
var schema_1 = require("./graphql/schema");
var resolvers_1 = require("./graphql/resolvers");
var app = (0, express_1.default)();
// Connect Database
(0, db_1.default)();
// GraphQL Server
var server = new apollo_server_express_1.ApolloServer({ typeDefs: schema_1.default, resolvers: resolvers_1.default });
await server.start();
server.applyMiddleware({ app: app });
exports.default = app;
