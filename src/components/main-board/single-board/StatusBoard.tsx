import React from "react";
import TaskCard from "./TaskCard";

const StatusBoard = () => {
  return (
    <div className="p-4 max-w-[400px] bg-slate-100">
      <div className="flex justify-between w-full  font-bold">
        <div className="flex justify-between  items-center gap-2">
          <span className="h-4 w-6 rounded-tl-lg rounded-bl-lg bg-red-500"></span>
          Incomplete
        </div>
        <div> Count</div>
      </div>
      <div className="flex flex-col  gap-4 ">
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default StatusBoard;
