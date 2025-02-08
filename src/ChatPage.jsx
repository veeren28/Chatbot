import React from "react";
import { X, Send } from "lucide-react";

function ChatPage() {
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

        {/* Chat Input - Pushes to the Bottom */}
        <div
          id="ccontainer-input"
          className="flex items-center p-2 border-t mt-auto"
        >
          <input
            type="text"
            className="flex-grow border rounded-lg px-2 py-1 outline-none"
            placeholder="Type a message..."
          />
          <button className="ml-2 text-blue-500 hover:text-blue-600">
            <Send size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatPage;
