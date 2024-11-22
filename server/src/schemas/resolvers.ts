import { User, Department, Item, CartItem, Cart } from '../models/index.js';
import { signToken } from '../utils/auth.js';

interface AddUserArgs {
    input: {
        username: string;
        profilePic?: string;
        email: string;
        password: string;
    }
}

interface UserArgs {
    username: string
    profilePic?: string;
}

interface LoginUserArgs {
    username: string;
    password: string;
}


interface DepartmentArgs {
    name: string
    lastAccessed?: Date;
}

interface addDepartmentArgs {
        input: {
        name: string;
        // items: Schema.Types.ObjectId[];
        lastAccessed?: Date;
    }
}

interface ItemArgs {
    name: string
}

interface addItemArgs {
    input: {
        name: string;
        image: string;
        description: string;
        price: number;
        inStock: Boolean;
        stockCount?: Number;
        // department: Schema.Types.ObjectId;
        featured: boolean;
    }
}

interface cartItemArgs {
    name: string;
    image: string;
}

interface addCartItemArgs {
    input: {
        name: string;
        image: string;
        description: string;
        price: number;
        quantity: number;
    }
}

const resolvers = {
    Query: {
        user: async (_parent: any, { username }: UserArgs) => {
            return User.findOne({ username }).populate('cart')
        },
        departments: async () => {
            return Department.find().populate('items');
        },
        department: async (_parent: any, { name }: DepartmentArgs) => {
            return Department.findOne({ name }).populate('items');
        },
        items: async () => {
            return Item.find().populate('department')
        },
        item: async (_parent: any, { name }: ItemArgs) => {
            return Item.findOne({ name })
        },
        cart: async () => {
            return Cart.findOne().populate('user').populate('addedItems')
        },
        cartItems: async () => {
            return CartItem.find()
        },
        cartItem: async (_parent: any, { name }: cartItemArgs) => {
            return CartItem.findOne({ name })
        }
    },
    Mutation: {
        addDepartment: async (_parent: any, { input }: addDepartmentArgs) => {
            const department = await Department.create({ ...input });

            return department
        },
        addItem: async (_parent: any, { input }: addItemArgs) => {
            const item = await Item.create({ ...input })
            return item
        },
        addUser: async (_parent: any, { input }: AddUserArgs) => {
            const user = await User.create({ ...input });

            return user
        },
        login: async (_parent: any, { username, password }: LoginUserArgs) => {
            const user = await User.findOne({ username });

            if (!user) {
                throw new Error('No user with this username found!');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new Error('Incorrect password!');
            }

            const token = signToken(user.username, user.email, user._id);
            return { token, user };
        },
        addCartItem: async (_parent: any, { input }: addCartItemArgs) => {
            const cartItem = await CartItem.create({ ...input })

            return cartItem
        }

    }
}

export default resolvers;
