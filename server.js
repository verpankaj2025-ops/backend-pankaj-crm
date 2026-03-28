import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import leadRoutes from "./routes/leadRoutes.js";

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// MongoDB connect
mongoose.connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/crm")
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// routes
app.use("/api/leads", leadRoutes);

// test route
app.get("/", (req, res) => {
  res.send("API running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
