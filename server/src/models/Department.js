"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var departmentSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    items: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Item' }],
    totalStock: { type: Number, required: false },
    // featured: { type: Array, required: false },
    lastAccessed: { type: Date, default: Date.now }
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
var Department = (0, mongoose_1.model)('Department', departmentSchema);
exports.default = Department;
