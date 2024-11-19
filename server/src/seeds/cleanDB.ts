import { Department, Item, User, Cart, CartItem } from "../models/index.js";
import process from "process";

const cleanDB = async (): Promise<void> => {
    try {
        // Delete documents from Department collection
        await Department.deleteMany({});
        console.log("Department collection cleaned.");

        // Delete documents from Item collection
        await Item.deleteMany({});
        console.log("Item collection cleaned.");

        // Delete documents from Cart collection
        await Cart.deleteMany({});
        console.log("Cart collection cleaned.");

        // Delete documents from CartItem collection
        await CartItem.deleteMany({});
        console.log("CartItem collection cleaned.");

        // Delete documents from User collection
        await User.deleteMany({});
        console.log("User collection cleaned.");
    } catch (err) {
        console.error("Error cleaning collections:", err);
        process.exit(1);
    }
};

export default cleanDB;
