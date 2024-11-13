import dotenv from 'dotenv';
import http from 'http';
import app from './app';
import { connectToDb } from './config/db';

dotenv.config();
const PORT = process.env.PORT || 5000;

connectToDb().then(() => {
  http.createServer(app).listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
