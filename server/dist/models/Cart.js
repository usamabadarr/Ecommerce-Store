import { Schema, model } from 'mongoose';
;
const CartSchema = new Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    addedItems: [{ type: Schema.Types.ObjectId, ref: 'CartItem' }],
    total: { type: Number, default: 0 }
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
const CartItem = model('Item', CartSchema);
export default CartItem;
