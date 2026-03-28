import express from "express";
import AutomationRule from "../../automation/automation.model.js";

const router = express.Router();

// Create rule
router.post("/", async (req, res) => {
  const rule = await AutomationRule.create(req.body);
  res.json(rule);
});

// Get rules
router.get("/", async (req, res) => {
  const rules = await AutomationRule.find();
  res.json(rules);
});

export default router;
