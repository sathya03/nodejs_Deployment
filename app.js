const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Yo...Welcome to THE UPDATED Home page 2.0 Dude !!!");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Hey There visitor !!!")
});