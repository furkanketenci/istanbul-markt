import express from "express";
import dotenv from "dotenv";
import dbConnection from "./config/db.js";
import productRoutePath from "./routes/product.js"

dotenv.config();

const app = express();
const port = 5001;


app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.use("", productRoutePath)
dbConnection();

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`)
})
