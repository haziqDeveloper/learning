import express from "express";
import dbConnection from "./config/db.js";
import dotenv from 'dotenv';
import authRoute from './routes/authRoute.js'
import layoutRoute from './routes/layoutRoute.js'
import cors from 'cors'


const app = express();

dotenv.config();
dbConnection();

app.use(cors());

app.use(express.json());
app.use('/',authRoute);
app.use('/',layoutRoute);
app.use('/images', express.static('images'));
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});