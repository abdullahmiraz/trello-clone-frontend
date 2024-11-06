import React from "react";
import StatusBoard from "./single-board/StatusBoard";

const MainBoard = () => {
  return (
    <div className="p-4 flex gap-2">
      <StatusBoard />
      <StatusBoard />
      <StatusBoard />
      <StatusBoard />
    </div>
  );
};

export default MainBoard;
