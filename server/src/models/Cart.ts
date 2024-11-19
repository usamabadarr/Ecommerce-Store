import { Schema, model, Document } from 'mongoose';

interface ICart extends Document {
    user: Schema.Types.ObjectId;
    addedItems: Schema.Types.ObjectId[];
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
