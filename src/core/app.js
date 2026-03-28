import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import authRoutes from '../api/routes/auth.routes.js';
import leadRoutes from '../api/routes/lead.routes.js';
import chatRoutes from '../api/routes/chat.routes.js';
import integrationRoutes from '../api/routes/integration.routes.js';
import automationRoutes from '../api/routes/automation.routes.js';
import aiRoutes from '../api/routes/ai.routes.js';
import followupRoutes from '../api/routes/followup.routes.js';

// 🔥 BROADCAST IMPORT
import broadcastRoutes from '../api/routes/broadcast.routes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 CRM API Running...");
});

// routes
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);
app.use("/api/chats", chatRoutes);
app.use("/api/integrations", integrationRoutes);
app.use("/api/automation", automationRoutes);
app.use("/api/ai", aiRoutes);
app.use("/api/followups", followupRoutes);

// 🔥 BROADCAST ROUTE
app.use("/api/broadcast", broadcastRoutes);

export default app;
