const router = require("express").Router();
const contactController = require("../../controllers/contactController");

// Matches with "/api/contact"
router.route("/")
    .get(contactController.findAll)
    .post(contactController.create);

// Matches with "/api/contact/:id"
router.route("/:id")
    .delete(contactController.remove);

module.exports = router;