const express = require("express");

//router
const router = express.Router();

//get all news
router.get("/", (req, res) => {
  res.json({ message: "get all projects" });
});

//get a single news
router.get("/:id", (req, res) => {
  res.json({ message: "get a single project" });
});

//post a new news
router.post("/", (req, res) => {
  res.json({ message: "Post a new news" });
});

//delete a news
router.delete("/:id", (req, res) => {
  res.json({ message: "delete a news" });
});

//update news
router.patch("/:id", (req, res) => {
  res.json({ message: "update a news" });
});

module.exports = router;
