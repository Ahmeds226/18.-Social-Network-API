// Imports:
const { Schema, model } = require("mongoose");
const moment = require("moment");

// User columns:
const UserSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/],
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Thought",
      },
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Friend counter:
UserSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// Calling user model function:
const User = model("User", UserSchema);

// Export:
module.exports = User;
