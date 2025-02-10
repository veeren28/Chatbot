import React, { useState } from "react";
import { X, Send, Loader } from "lucide-react";
import { BotMsg } from "./BotMsg";
import { UserMsg } from "./UserMsg";
import run from "./geminiapi";

function ChatPage() {
  const [inputData, setInputData] = useState(""); // Stores user input
  const [messages, setMessages] = useState([]); // Stores chat history
  const [loading, setLoading] = useState(false); // Tracks API loading state

  const handleOnClick = async () => {
    if (inputData.trim() === "") return; // Prevent sending empty messages
    setLoading(true);

    try {
      // Add user message to chat history
      const userMessage = { sender: "user", text: inputData };
      setMessages((prevMessages) => [...prevMessages, userMessage]);

      // Send request to Gemini API and receive response
      let resp = await run(inputData);

      // Ensure response is a valid string
      const botMessage = {
        sender: "Bot",
        text: resp ?? "No response received.",
      };

      // Add bot response to chat history
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      // Handle API errors
      const errorMessage = { sender: "Bot", text: "Error fetching response." };
      setMessages((prevMessages) => [...prevMessages, errorMessage]);
    }

    setLoading(false);
    setInputData(""); // Clear input field after sending
  };

  return (
    <div className="m-0 p-0 box-border w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200">
      <div className="w-96 h-96 bg-white rounded-lg flex flex-col" id="chatbox">
        {/* Chatbox Header */}
        <div className="w-full h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg flex items-center justify-between px-4">
          <div className="text-3xl text-white">Chatbot</div>
          <button className="text-white cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-grow flex flex-col overflow-auto p-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={
                msg.sender === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >
              {msg.sender === "user" ? (
                <UserMsg Msg={msg.text} />
              ) : (
                <BotMsg Msg={msg.text} />
              )}
            </div>
          ))}
        </div>

        {/* Input Field & Send Button */}
        <div className="flex items-center p-2 border-t">
          <input
            type="text"
            value={inputData}
            className="flex-grow border rounded-lg px-2 py-1 outline-none"
            placeholder="Type a message..."
            onChange={(e) => setInputData(e.target.value)}
          />
          <button
            className="ml-2 text-blue-500 hover:text-blue-600 cursor-pointer"
            onClick={handleOnClick}
            disabled={loading}
          >
            {loading ? <Loader size={24} /> : <Send size={24} />}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
