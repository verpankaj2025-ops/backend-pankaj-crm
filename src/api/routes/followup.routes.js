import express from "express";
import Followup from "../../scheduler/followup.model.js";

const router = express.Router();

// create followup
router.post("/", async (req, res) => {
  const data = await Followup.create(req.body);
  res.json(data);
});

export default router;
