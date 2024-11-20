// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";
// import User, { IUser } from "../models/User";

// const generateToken = (user: IUser) => {
//   return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET!, {
//     expiresIn: "1h",
//   });
// };

// const userResolver = {
//   Mutation: {
//     register: async (_: any, { username, email, password }: any) => {
//       const user = new User({ username, email, password });
//       await user.save();
//       const token = generateToken(user);
//       return { id: user._id, username: user.username, email: user.email, token };
//     },
//     login: async (_: any, { email, password }: any) => {
//       const user = await User.findOne({ email });
//       if (!user || !(await user.comparePassword(password))) {
//         throw new Error("Invalid credentials");
//       }
//       const token = generateToken(user);
//       return { id: user._id, username: user.username, email: user.email, token };
//     },
//   },
// };

// export default userResolver;


import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";

// Function to generate JWT token
const generateToken = (user: IUser) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
};

const userResolver = {
  Mutation: {
    // Register user
    register: async (_: any, { username, email, password }: any) => {
      // Check if the user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new Error("User already exists with this email");
      }

      // Create a new user
      const user = new User({ username, email, password });

      // Save the user (password will be hashed automatically by the pre-save hook)
      await user.save();

      // Generate JWT token
      const token = generateToken(user);

      // Return user details with token
      return { id: user._id, username: user.username, email: user.email, token };
    },

    // Login user
    login: async (_: any, { email, password }: any) => {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        throw new Error("User not found");
      }

      // Compare passwords
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        throw new Error("Invalid credentials");
      }

      // Generate JWT token
      const token = generateToken(user);

      // Return user details with token
      return { id: user._id, username: user.username, email: user.email, token };
    },
  },
};

export default userResolver;
