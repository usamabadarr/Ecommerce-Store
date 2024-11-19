import { Schema, model, Document, ObjectId } from 'mongoose';



interface IDepartment extends Document {
    name: string;
    image: string;
    items: ObjectId[];
    totalStock?: number;
    // featured?: [featuredItemSchema];
    lastAccessed?: Date;
};

const departmentSchema = new Schema<IDepartment>(
    {
        name: { type: String, required: true },
        image: { type: String, required: true },
        items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
        totalStock: { type: Number, required: false },
        // featured: { type: Array, required: false },
        lastAccessed: { type: Date, default: Date.now }
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

const Department = model('Department', departmentSchema);


export default Department
