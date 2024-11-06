/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import TaskCard from "./TaskCard";

type Status = "completed" | "to-do" | "incomplete" | "doing" | "user review";

const taskData: Record<Status, string[]> = {
  completed: ["Task 1", "Task 2", "Task 1", "Task 2", "Task 1", "Task 2"],

  incomplete: [
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 4",
    "Task 5",
    "Task 4",
    "Task 5",
  ],
  "to-do": [
    "Task 3",
    "Task 4",
    "Task 5",
    "Task 4",
    "Task 5",
    "Task 4",
    "Task 5",
  ],
  doing: ["Task 6", "Task 7", "Task 6", "Task 7", "Task 6", "Task 7"],
  "user review": [
    "Task 8",
    "Task 9",
    "Task 10",
    "Task 9",
    "Task 10",
    "Task 9",
    "Task 10",
  ],
};

const statusColors: Record<Status, string> = {
  completed: "bg-green-500",
  "to-do": "bg-yellow-500",
  doing: "bg-blue-500",
  "user review": "bg-purple-500",
  incomplete: "bg-gray-500",
};

interface StatusBoardProps {
  status: Status;
}

const StatusBoard: React.FC<StatusBoardProps> = ({ status }) => {
  const tasks = taskData[status] || [];
  const statusColor = statusColors[status] || "bg-gray-500";

  return (
    <div className="max-w-[400px] bg-slate-100 text-gray-700 h-[90vh] p-4 mx-1 my-8 flex flex-col gap-6">
      <div className="flex justify-between w-full font-bold">
        <div className="flex justify-between items-center gap-2">
          {}
          <span
            className={`h-5 w-5 rounded-tl-lg rounded-bl-lg ${statusColor}`}
          ></span>
          {status.charAt(0).toUpperCase() + status.slice(1)} {}
        </div>
        <div className="bg-slate-300 w-8 h-8 rounded flex items-center justify-center">
          {tasks.length} {}
        </div>
      </div>
      <div className="flex flex-col gap-4 overflow-y-scroll">
        {tasks.map((task: any, index: number) => (
          <div key={index}>
            <TaskCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatusBoard;
