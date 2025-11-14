const express = require('express');
const maintenanceRouter = require('./routes/maintenanceRoutes');

const app = express();

const port = process.env.PORT;

app.get('/', (req, res) => {
    res.send('Welcome to Maintenance Checker!')
})
app.use('/api/v1/maintenance' , maintenanceRouter);
app.listen(port, () =>{
    console.log(`Listening on port ${port}`);
})
module.exports = app;