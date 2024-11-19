import { Schema, model, Document, ObjectId, } from 'mongoose';

interface IItem extends Document {
    name: string;
    image: string;
    description: string;
    price: number;
    inStock: Boolean;
    stockCount?: Number;
    department: ObjectId;
    featured: boolean;
};

const itemSchema = new Schema<IItem>(
    {
        name: String,
        image: String,
        description: String,
        price: Number,
        inStock: Boolean,
        stockCount: { type: Boolean, required: false, default: 1 },
        department: { type: Schema.Types.ObjectId, ref: 'Department' },
        featured: { type: Boolean, default: false }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Item = model('Item', itemSchema);

export default Item
