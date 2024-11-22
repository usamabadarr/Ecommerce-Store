
// import { addDepartment } from '../controllers/departmentController.js';
import { Department, Item, CartItem } from '../models/index.js';
// import { signToken, AuthenticationError } from '../utils/auth.js';


interface DepartmentArgs {
    name: string
    lastAccessed?: Date;
}

// interface addDepartmentArgs {
//         input: {
//         name: string;
//         // items: Schema.Types.ObjectId[];
//         lastAccessed?: Date;
//     }
// }

interface ItemArgs {
    name: string
}

// interface addItemArgs {
//     input: {
//         name: string;
//         image: string;
//         description: string;
//         price: number;
//         inStock: Boolean;
//         stockCount?: Number;
//         // department: Schema.Types.ObjectId;
//         featured: boolean;
//     }
// }

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
        departments: async () => {
            return Department.find().populate('items');
        },
        department: async (_parent: any, { name }: DepartmentArgs) => {
            return Department.findOne({ name }).populate('thoughts');
        },
        items: async () => {
            return Item.find().populate('department')
        },
        item: async (_parent: any, { name }: ItemArgs) => {
            return Item.findOne({ name }).populate('department')
        },
        cartItems: async () => {
            return CartItem.find()
        },
        cartItem: async (_parent: any, { name }: cartItemArgs) => {
            return CartItem.findOne({ name })
        }
    },
    Mutation: {
        // addDepartment: async (_parent: any, { input }: addDepartmentArgs) => {
        //     const department = await Department.create({ ...input });

        //     return department
        // },
        // addItem: async (_parent: any, { input }: addItemArgs) => {
        //     const item = await Item.create({ ...input })
        // },
        addCartItem: async (_parent: any, { input }: addCartItemArgs) => {
            const cartItem = await CartItem.create({ ...input })

            return cartItem
        }

    }
}

export default resolvers;
