const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET
router.get("/", getWorkouts);

router.get("/:id", getWorkout);

// POST
router.post("/", createWorkout);

// DELETE
router.delete("/:id", deleteWorkout);

// UPDATE
router.patch("/:id", updateWorkout);

module.exports = router;
