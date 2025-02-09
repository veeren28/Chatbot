import React from "react";

export const UserMsg = ({ Msg }) => {
  return (
    <>
      <div className="w-56 m-2 h-8 bg-gradient-to-r from-cyan-500 to-blue-500  flex p-2 items-center rounded-2xl">
        <p>{Msg}</p>
      </div>
    </>
  );
};
