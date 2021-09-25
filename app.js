const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send("Yo...Welcome to Home page Dude !!!");
});

const port = process.env.port || 3000;
app.listen(port, () => {
    console.log("Hey There visitor !!!")
});