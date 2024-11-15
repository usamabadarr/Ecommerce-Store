import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import User from '../models/User';

// User Registration
export const register = async (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create a new user
    const newUser = new User({ name, email, password });
    await newUser.save();

    // Generate a JWT token
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '30d',
    });

    // Send the response with the user and token
    res.status(201).json({ user: newUser, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// User Login
export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'User not found' });
    }

    // Compare the provided password with the stored hashed password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY as string, {
      expiresIn: '30d',
    });

    // Send the response with the user and token
    res.json({ user, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in user' });
  }
};
