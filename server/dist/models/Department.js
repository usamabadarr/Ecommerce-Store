import { Schema, model } from 'mongoose';
;
const departmentSchema = new Schema({
    name: { type: String, required: true },
    items: [{ type: Schema.Types.ObjectId, ref: 'Item' }],
    lastAccessed: { type: Date, default: Date.now }
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
const Department = model('Department', departmentSchema);
export default Department;
