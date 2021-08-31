const router = require("express").Router();
const contactController = require("../../controllers/contactController");

// Matches with "/api/contact"
router.route("/").get(contactController.findAll).post(contactController.create);

module.exports = router;