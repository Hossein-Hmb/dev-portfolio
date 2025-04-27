// server.js
const express = require("express");
const mongoose = require("mongoose");
const blogPosts = require("./routes/blogposts");

const app = express();
const port = 3001;

app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/portfolio", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.use("/api/blogposts", blogPosts);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
