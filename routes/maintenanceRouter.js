const { register } = require("module");
const { router } = require("../app");
const { registerMaintenance } = require("../controllers/maintenanceController");

router.route('/maintenance').post(registerMaintenance);