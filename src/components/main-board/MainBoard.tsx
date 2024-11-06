import React from "react";
import StatusBoard from "./single-board/StatusBoard";

type Status = "completed" | "to-do" | "incomplete" | "doing" | "user review";

const statuses: Status[] = [
  "completed",
  "to-do",
  "incomplete",
  "doing",
  "user review",
];

const MainBoard: React.FC = () => {
  return (
    <div className="p-4 flex gap-2">
      {statuses.map((status) => (
        <StatusBoard key={status} status={status} />
      ))}
    </div>
  );
};

export default MainBoard;
