const { GoogleGenerativeAI } = require("@google/generative-ai");

async function runAI() {
  const genAI = new GoogleGenerativeAI(
    "AIzaSyBGXvtApA6MoxKi3XNuhLf1Ou7Msf-aYk8"
  );
  const model = genAI.getGenerativeModel({ model: "gemini-2" });

  const prompt = "Explain how AI works";

  try {
    const result = await model.generateContent(prompt);
    const response = await result.response;

    console.log(response.candidates[0].content);
  } catch (error) {
    console.error("Error generating content:", error);
  }
}

runAI();
