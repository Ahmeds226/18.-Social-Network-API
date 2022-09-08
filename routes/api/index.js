// Imports:
const router = require("express").Router();
const userRoutes = require("./user-routes");
const thoughtRoutes = require("./thought-routes");

// Routes for both users and thoughts:
router.use("/users", userRoutes);
router.use("/thoughts", thoughtRoutes);

// Export:
module.exports = router;
