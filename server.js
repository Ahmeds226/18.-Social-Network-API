// Imports:
const express = require("express");
const mongoose = require("mongoose");

// Port / connection:
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Calls routes:
app.use(require("./routes"));

// Connect to mongoDB:
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/social-network-API",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.set("debug", true);

// Successfull connection message:
app.listen(PORT, () =>
  console.log(`Successfully connected on localhost:${PORT}`)
);
