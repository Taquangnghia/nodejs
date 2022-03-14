
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';

import productRoute from '../routes/product';

const app = express();
app.use(cors());

app.use(express.json());

//
app.use("/api",productRoute);

// data set
mongoose.connect('mongodb://127.0.0.1:27017/web1639')
    .then(()=>console.log('ket noi thanh congd '))
    .catch((error)=>console.log(error));

//
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running port", PORT);
});

