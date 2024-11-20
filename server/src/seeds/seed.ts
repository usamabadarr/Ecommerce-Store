import db from '../config/connection.js';
import { Department, Item, User, Cart, CartItem } from '../models/index.js';
import cartSeeds from './cartData.json' assert { type: "json" };
import userSeeds from './userData.json' assert { type: "json" };
import departmentSeeds from './departmentData.json' assert { type: "json" };
import itemSeeds from './itemData.json' assert { type: "json" };
import cartItemSeeds from './cartItemData.json' assert { type: "json" };

import cleanDB from './cleanDB.js';

const seedDatabase = async (): Promise<void> => {
  try {
    await db();
    await cleanDB();

    await Department.insertMany(departmentSeeds);
    console.log('Departments seeded successfully!');
    await Item.insertMany(itemSeeds);
    console.log('Items seeded successfully!');
    await User.insertMany(userSeeds);
    console.log('Users seeded successfully!');
    await Cart.insertMany(cartSeeds);
    console.log('Carts seeded successfully!');
    await CartItem.insertMany(cartItemSeeds);
    console.log('CartItems seeded successfully!');

    console.log('Seeding completed successfully!');
    process.exit(0);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('Error seeding database:', error.message);
    } else {
      console.error('Unknown error seeding database');
    }
    process.exit(1);
  }
};

seedDatabase();
