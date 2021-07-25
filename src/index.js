const express = require("express");
require("./db")
const app = express();
app.use(express.json());
const product = require("./models")

app.get('/', (req, res) => {
    return res.send("welcome to summer school of 2021")
})

app.post('/api/products', async (req, res) => {
    const Product = new product({
        id: 1,
        description: req.body.discription
    })
    await Product.save();
    console.log(req.body);
    return res.status(201).send(Product);
});

app.get('/api/products', (req, res) => {
    return res.status(200).send({ "title": "summer school", "date": "july" })
})
app.patch('/api/products/:id', (req, res) => {
    console.log(req.params.id);
    return res.status(200).send("");
})

app.delete('/api/products/:id', (req, res) => {
    return req.send("")
})
app.listen(3000, () => { console.log("listening on the port 3000") })