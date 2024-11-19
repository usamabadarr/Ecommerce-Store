import { Schema, model, Document, } from 'mongoose';

interface ICartItem extends Document {
    name: string;
    image: string;
    description: string;
    price: number;
    quantity: number;
};

const cartItemSchema = new Schema<ICartItem>(
    {
        name: String,
        image: String,
        description: String,
        price: Number,
        quantity: Number,
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const CartItem = model('CartItem', cartItemSchema);

export default CartItem
