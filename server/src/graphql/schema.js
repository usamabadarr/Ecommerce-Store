"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_express_1 = require("apollo-server-express");
var typeDefs = (0, apollo_server_express_1.gql)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  type User {\n    id: ID!\n    username: String!\n    email: String!\n    token: String\n  }\n\n  type Product {\n    id: ID!\n    name: String!\n    price: Float!\n    description: String\n    stock: Int!\n  }\n\n  type Query {\n    getProducts: [Product]\n  }\n\n  type Mutation {\n    register(username: String!, email: String!, password: String!): User\n    login(email: String!, password: String!): User\n  }\n"], ["\n  type User {\n    id: ID!\n    username: String!\n    email: String!\n    token: String\n  }\n\n  type Product {\n    id: ID!\n    name: String!\n    price: Float!\n    description: String\n    stock: Int!\n  }\n\n  type Query {\n    getProducts: [Product]\n  }\n\n  type Mutation {\n    register(username: String!, email: String!, password: String!): User\n    login(email: String!, password: String!): User\n  }\n"])));
exports.default = typeDefs;
var templateObject_1;
