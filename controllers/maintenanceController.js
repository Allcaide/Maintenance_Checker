const fs = require('fs');

exports.registerMaintenance = async (req, res) => {
    let { taskName, Date} = await req.body;
    console.log(taskName, Date);
    res.status(201).send({ message: 'Maintenance task registered successfully' });
}