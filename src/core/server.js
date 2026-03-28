import app from './app.js';
import http from 'http';
import { Server } from 'socket.io';
import dotenv from 'dotenv';
import connectDB from './database/db.js';

// 🔥 FOLLOWUP IMPORT
import { runFollowups } from '../scheduler/followupJobs.js';

dotenv.config();

// DB connect
connectDB();

const server = http.createServer(app);

// socket setup
const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

global.io = io;

io.on("connection", (socket) => {
  console.log("⚡ Client connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("❌ Client disconnected:", socket.id);
  });
});

// 🔥 AUTO FOLLOWUP RUN (हर 30 सेकंड)
setInterval(() => {
  runFollowups();
}, 30000);

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
