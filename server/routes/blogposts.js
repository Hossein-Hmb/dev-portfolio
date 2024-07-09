// routes/blogposts.js
const express = require("express");
const BlogPost = require("../models/BlogPost");
const router = express.Router();

// Create a new blog post
router.post("/", async (req, res) => {
  const { title, content, videoUrl } = req.body;
  const newPost = new BlogPost({ title, content, videoUrl });
  await newPost.save();
  res.status(201).json(newPost);
});

// Get all blog posts
router.get("/", async (req, res) => {
  const posts = await BlogPost.find();
  res.json(posts);
});

// Get a single blog post
router.get("/:id", async (req, res) => {
  const post = await BlogPost.findById(req.params.id);
  res.json(post);
});

// Update a blog post
router.put("/:id", async (req, res) => {
  const { title, content, videoUrl } = req.body;
  const updatedPost = await BlogPost.findByIdAndUpdate(
    req.params.id,
    { title, content, videoUrl },
    { new: true }
  );
  res.json(updatedPost);
});

// Delete a blog post
router.delete("/:id", async (req, res) => {
  await BlogPost.findByIdAndDelete(req.params.id);
  res.status(204).send();
});

module.exports = router;
