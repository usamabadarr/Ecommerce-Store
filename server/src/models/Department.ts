import { Schema, model, Document } from 'mongoose';



interface IDepartment extends Document {
    name: string;
    items: Schema.Types.ObjectId[];
    lastAccessed?: Date;
};

const departmentSchema = new Schema<IDepartment>(
    {
        name: { type: String, required: true },
        items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
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


export default Department;
