import gql from "graphql-tag";

const typeDefs = gql`
    type User {
        _id: ID
        profilePic: String
        username: String
        email: String
        password: String
    }

    type Cart {
        _id: ID
        user: [User]
        addedItems: [CartItem]
        total: Number
    }

    type CartItem {
        _id: ID
        itemName: String
        img: String
        quantity: Number
        price: Number
    }

    type Item {
        name: String
        image: String
        description: String
        price: Number
        quantity: Number
    }

    type Department {
        name: String
        items: [Item]
    }

    input UserInput {
        username: String!
        profilePic: String
        email: String!
        password: String!
    }
    
    type Auth {
        token: ID!
        user: User
    }

    type Query {
    users: [User]
    user(username: String!): User
    me: User
    }
    
    type Mutation {
        addUser(input: UserInput!): Auth
        login(email: String!, password: String!): Auth
}
`;

export default typeDefs;
