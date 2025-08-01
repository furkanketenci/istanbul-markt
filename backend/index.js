import express from 'express';
import dotenv from 'dotenv';
import dbConnection from './config/db.js';
import productRoutePath from './routes/product.js';
import cors from 'cors';
dotenv.config();

const app = express();
const port = 5001;

app.use(cors());

app.use('', productRoutePath);
dbConnection();

app.listen(port, () => {
  console.warn(`Server running on http://localhost:${port}`);
});
// test comment
