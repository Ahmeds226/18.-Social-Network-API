// Imports:
const router = require("express").Router();
const apiRoutes = require("./api");

// Prefix to access all routes e.g /api/users
router.use("/api", apiRoutes);

// Wrong route:
router.use((req, res) => {
  res.status(404).send("<h1> Error code: 404 </h1>");
});

// Export:
module.exports = router;
