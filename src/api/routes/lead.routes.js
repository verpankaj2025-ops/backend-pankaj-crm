import express from 'express';
import {
  createLead,
  getLeads,
  updateLeadStatus
} from '../../leads/lead.controller.js';
import { protect } from '../../auth/middleware.js';

const router = express.Router();

router.post("/", protect, createLead);
router.get("/", protect, getLeads);

// 🔥 UPDATE STATUS ROUTE
router.put("/:id/status", protect, updateLeadStatus);

export default router;
