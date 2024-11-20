import { Schema, model } from 'mongoose';
;
const cartItemSchema = new Schema({
    name: String,
    image: String,
    description: String,
    price: Number,
    quantity: Number,
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
const CartItem = model('CartItem', cartItemSchema);
export default CartItem;
