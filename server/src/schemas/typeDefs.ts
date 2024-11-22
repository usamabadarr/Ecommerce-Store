<<<<<<< HEAD
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
        thoughts: [Thought]!
        thought(thoughtId: ID!): Thought
        me: User
    }

    type Mutation {
        addUser(input: UserInput!): Auth
        login(email: String!, password: String!): Auth
        addThought(input: ThoughtInput!): Thought
        addComment(thoughtId: ID!, commentText: String!): Thought
        removeThought(thoughtId: ID!): Thought
        removeComment(thoughtId: ID!, commentId: ID!): Thought
    }
`;

export default typeDefs;
=======
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
>>>>>>> 11b32bdb95bb94fa8fb2d55c227fefe0c04a5ca1
