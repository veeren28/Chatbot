import React from "react";

export const BotMsg = ({ Msg }) => {
  return (
    <div className="w-56 m-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-2 rounded-2xl">
      {Msg}
    </div>
  );
};
