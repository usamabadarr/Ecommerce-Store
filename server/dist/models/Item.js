import { Schema, model } from 'mongoose';
;
const itemSchema = new Schema({
    name: String,
    image: String,
    description: String,
    price: Number,
    inStock: Boolean,
    stockCount: { type: Boolean, required: false, default: 1 },
    department: { type: Schema.Types.ObjectId, ref: 'Department' },
    featured: { type: Boolean, default: false }
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
const Item = model('Item', itemSchema);
export default Item;
