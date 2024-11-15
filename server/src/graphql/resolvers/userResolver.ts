import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User, { IUser } from "../models/User";

const generateToken = (user: IUser) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET!, {
    expiresIn: "1h",
  });
};

const userResolver = {
  Mutation: {
    register: async (_: any, { username, email, password }: any) => {
      const user = new User({ username, email, password });
      await user.save();
      const token = generateToken(user);
      return { id: user._id, username: user.username, email: user.email, token };
    },
    login: async (_: any, { email, password }: any) => {
      const user = await User.findOne({ email });
      if (!user || !(await user.comparePassword(password))) {
        throw new Error("Invalid credentials");
      }
      const token = generateToken(user);
      return { id: user._id, username: user.username, email: user.email, token };
    },
  },
};

export default userResolver;
