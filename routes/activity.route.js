const express = require("express");
const { getActivities, addActivity } = require("../controllers/activity.controller");
const router = express.Router();

router.get("/activities", getActivities); // Fetch all activities
router.post("/activity", addActivity);    // Add a new activity

module.exports = router;
