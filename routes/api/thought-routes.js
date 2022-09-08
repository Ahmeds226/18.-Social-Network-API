// Import:
const router = require("express").Router();

// All thought routes called:
const {
  getAllThought,
  getThoughtById,
  createThought,
  updateThought,
  deleteThought,
  createReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// Route to get all thoughts and create a thought:
router.route("/").get(getAllThought).post(createThought);

// Routes requiring an id:
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(deleteThought);

// Creating a reaction route:
router.route("/:thoughtId/reactions").post(createReaction);

// Deleting a reaction route:
router.route("/:thoughtId/reactions/:reactionId").delete(deleteReaction);

// Export:
module.exports = router;
