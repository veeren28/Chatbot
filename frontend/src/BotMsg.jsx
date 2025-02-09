import React from "react";

export const BotMsg = ({ Msg }) => {
  return (
    <div className="w-56 m-2 bg-gradient-to-r from-cyan-500 to-blue-500 flex p-2 items-center rounded-2xl">
      <p className="text-white">{Msg}</p>
    </div>
  );
};
