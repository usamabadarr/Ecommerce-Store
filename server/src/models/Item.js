"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
;
var itemSchema = new mongoose_1.Schema({
    name: String,
    image: String,
    description: String,
    price: Number,
    inStock: Boolean,
    stockCount: { type: Boolean, required: false, default: 1 },
    department: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Department' },
    featured: { type: Boolean, default: false }
}, {
    toJSON: {
        virtuals: true,
    },
    id: false,
});
var Item = (0, mongoose_1.model)('Item', itemSchema);
exports.default = Item;
