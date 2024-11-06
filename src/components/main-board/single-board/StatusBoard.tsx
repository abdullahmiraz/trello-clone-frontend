import React from "react";
import TaskCard from "./TaskCard";

const StatusBoard = () => {
  return (
    <div className="  max-w-[400px] bg-slate-100 text-gray-700 h-[90vh] p-4 mx-1 my-8  flex flex-col gap-6">
      <div className="flex justify-between w-full  font-bold">
        <div className="flex justify-between  items-center gap-2">
          <span className="h-5 w-5 rounded-tl-lg rounded-bl-lg bg-red-500"></span>
          Incomplete
        </div>
        <div className="bg-slate-300 w-8 h-8 rounded flex items-center justify-center">
          0
        </div>
      </div>
      <div className="flex flex-col  gap-4  overflow-y-scroll">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default StatusBoard;
