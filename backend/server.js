require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Use API key from .env
const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const genAI = new GoogleGenerativeAI(GOOGLE_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

app.post("/chat", async (req, res) => {
  try {
    const userMessage = req.body.message;
    if (!userMessage) {
      return res.status(400).json({ error: "Message is required" });
    }

    const result = await model.generateContent(userMessage);
    const response = await result.response;

    // ✅ Extract the AI's text response correctly
    const reply = response.candidates[0].content.parts
      .map((part) => part.text)
      .join(" ");

    res.json({ reply });
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.listen(PORT, () =>
  console.log(`✅ Server running on http://localhost:${PORT}`)
);
