import mongoose from 'mongoose';

export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI as string, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to database');
  } catch (error) {
    console.error('Database connection error:', error);
    process.exit(1);
  }
};
