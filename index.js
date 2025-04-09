const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model');
const app = express();


app.use(express.json());


app.get('/', (req, res) => {
    res.send('Hello from node API server!');
});

app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product); 
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


mongoose.connect("mongodb+srv://fatima:fatima@backenddb.vrtealu.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
    .then(() => {
        console.log("Connected to database!");
        app.listen(3000, () => {
            console.log('Server is running on http://localhost:3000');
        });
    })
    .catch(() =>{
        console.log("connection failed!");
    });
