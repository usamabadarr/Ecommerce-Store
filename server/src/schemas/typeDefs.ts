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
        total: Int
    }

    type CartItem {
        _id: ID
        name: String
        image: String
        description: String
        price: Int
        quantity: Int
    }

    type Item {
        name: String
        image: String
        description: String
        price: Int
        inStock: Boolean
        stockCount: Int
        department: [Department]
        featured: Boolean
    }

    type Department {
        name: String
        items: [Item]
        lastAccessed: String
    }

    input DepartmentInput {
        name: String!
        lastAccessed: String
    }

    input CartItemInput {
        name: String
        image: String
        price: Int
        quantity: Int
    }

    input ItemInput {
        name: String!
        image: String!
        description: String!
        price: Int!
        inStock: Boolean!
        stockCount: Int
        featured: Boolean!
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
        user(username: String!): User
        me: User
        cart: Cart
        cartItem(name: String!): CartItem
        cartItems: [CartItem]
        items: [Item]
        item(name: String!): Item
        departments: [Department]
        department(name: String!): Department
    }
    
    type Mutation {
        addUser(input: UserInput!): Auth
        login(email: String!, password: String!): Auth
        addCartItem(input: CartItemInput!): Cart
        addItem(input: ItemInput!): Item
        addDepartment(input: DepartmentInput!): Department
}
`;

export default typeDefs;
