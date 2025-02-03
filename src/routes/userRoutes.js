const express = require("express");
const verifyToken = require("../middlewares/authMiddleware");

const authorizeRole = require("../middlewares/roleMiddleware");

const router = express.Router();

// Only admin can access this router
router.get("/admin", verifyToken, authorizeRole("admin"), (req, res) => {
  res.json({ message: " Welcome admin" });
});

// Both admin and manager can access this router
router.get(
  "/manger",
  verifyToken,
  authorizeRole("admin", "manager"),
  (req, res) => {
    res.json({ message: " Welcome manager" });
  }
);

// all can access this router
router.get(
  "/user",
  verifyToken,
  authorizeRole("admin", "manager", "user"),
  (req, res) => {
    res.json({ message: " Welcome user" });
  }
);

module.exports = router;
