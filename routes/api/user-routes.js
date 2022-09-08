// Import:
const router = require("express").Router();

// All user routes called:
const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// Route for get all users and create a user
router.route("/").get(getAllUser).post(createUser);

// Routes requiring a user id:
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);
router.route("/:userId/friends/:friendId").post(addFriend).delete(deleteFriend);

// Export:
module.exports = router;
