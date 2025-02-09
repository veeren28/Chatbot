import React from "react";
import { X, Send } from "lucide-react";
import { BotMsg } from "./BotMsg";
import { UserMsg } from "./UserMsg";
import { useState } from "react";
function ChatPage() {
  const [inputData, setInputData] = useState("");
  const [message, setMessage] = useState([]);
  const handleOnClick = () => {
    if (inputData.trim === "") return;

    setMessage([...message, { data: inputData, id: crypto.randomUUID() }]);
    setInputData(" ");
    // <UserMsg Msg={message} />;
  };

  return (
    <div className="m-0 p-0 box-border w-screen h-screen flex justify-center items-center bg-gradient-to-r from-blue-200 to-cyan-200">
      {/* Chat Container - Make it a Flex Column */}
      <div className="w-96 h-96 bg-white rounded-lg flex flex-col" id="chatbox">
        {/* Chat Header */}
        <div className="w-full h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-lg flex items-center justify-between px-4">
          <div className="text-3xl text-white">Logo</div>
          <button className="text-white cursor-pointer">
            <X size={24} />
          </button>
        </div>

        {/* Chat Messages Area (This Will Expand) */}
        <div className="flex-grow flex flex-col overflow-auto">
          <div className="flex justify-items-start">
            {" "}
            <BotMsg />
          </div>

          {message.map((messages) => (
            <div className="flex justify-end" key={messages.id}>
              <UserMsg Msg={messages.data} />
            </div>
          ))}
        </div>
        {/* Chat Input - Pushes to the Bottom */}
        <div
          id="ccontainer-input"
          className="flex items-center p-2 border-t mt-auto"
        >
          <input
            id="input"
            type="text"
            value={inputData}
            className="flex-grow border rounded-lg px-2 py-1 outline-none"
            placeholder="Type a message..."
            onChange={(e) => setInputData(e.target.value)}
          />

          <button
            className="ml-2 text-blue-500 hover:text-blue-600 cursor-pointer"
            onClick={handleOnClick}
          >
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
