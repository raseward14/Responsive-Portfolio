const router = require("express").Router();

const contactRoutes = require("./contact");

router.get("/", function (req, res, next) {
    res.render("index", { title: "Express" });
});

// Contact routes
router.use("/contact", contactRoutes);

module.exports = router;