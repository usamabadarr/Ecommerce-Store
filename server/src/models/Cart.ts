import { Schema, model, Document, ObjectId, } from 'mongoose';

interface ICart extends Document {
    user: ObjectId;
    addedItems: ObjectId[];
    total: number;
};

const CartSchema = new Schema<ICart>(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User' },
        addedItems: [{ type: Schema.Types.ObjectId, ref: 'CartItem' }],
        total: { type: Number, default: 0 }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const CartItem = model('Item', CartSchema);

export default CartItem
