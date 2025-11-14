const express = require('express');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Welcome to Maintenance Checker!')
})

app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})
module.exports = app;