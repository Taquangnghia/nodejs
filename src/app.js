
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import productRoute from '../routes/product';
import catergoryRouter from '../routes/category';
import users from '../routes/auth';

const app = express();
//middiewaer
app.use(cors());
app.use(express.json());

//router
app.use("/api",productRoute);
app.use("/api",catergoryRouter);
app.use("/api",users)

// data set
mongoose.connect('mongodb://127.0.0.1:27017/web1639')
    .then(()=>console.log('ket noi thanh congd '))
    .catch((error)=>console.log(error));

//
const PORT = 8000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
});

