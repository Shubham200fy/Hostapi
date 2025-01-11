const express = require('express');
require('dotenv').config();
const app = express();
const product_router = require('./routes/products');
const PORT = process.env.PORT || 5000;
const connectDB = require('./db/connect');

app.get('/', (req,res)=>{
    res.send('Hi, I am live');
});

app.use('/api/products',product_router);

const start = async () => {
    try {
        await connectDB(process.env.MONGODB_URL);
        app.listen(PORT, () => {
            console.log(`${PORT} Yes I am connected`);
        })
    } catch (e) {
        console.log(e);
    }
}

start();