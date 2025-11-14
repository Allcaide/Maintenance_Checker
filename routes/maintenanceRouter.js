const express = require('express');
const router = express.Router();
const { registerMaintenance } = require("../controllers/maintenanceController");

router.route('/maintenance').post(registerMaintenance);

module.exports = router;