require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const connectDB = require("./config/db.js");

const authRoutes = require("./routes/authRoutes.js")
const sessionRoutes = require("./routes/sessionRoutes.js");
const questionsRoutes = require("./routes/questionRoutes.js");

const { protect } = require("./middlewares/authMiddleware.js");
const { generateInterviewQuestions, generateConceptExplanation} = require("./controllers/aiController.js");

const app = express();

// Middlerware to handle CORS
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

connectDB();

// Middleware 
app.use(express.json());

//Routes
app.use("/api/auth", authRoutes);  // /api/auth/register works 
app.use("/api/sessions", sessionRoutes);
app.use("/api/questions", questionsRoutes);

app.use("/api/ai/generate-questions", protect, generateInterviewQuestions);
app.use("/api/ai/generate-explanatation", protect, generateConceptExplanation);

//Serve uplaods folder
app.use("/uploads", express.static(path.join(__dirname, "uploads"), {}));

//Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});