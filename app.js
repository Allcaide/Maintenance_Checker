const express = require('express');
const maintenanceRouter = require('./routes/maintenanceRouter');

const app = express();


app.get('/', (req, res) => {
    res.send('Welcome to Maintenance Checker!')
})
app.use('/api/v1/maintenance' , maintenanceRouter);

module.exports = app;