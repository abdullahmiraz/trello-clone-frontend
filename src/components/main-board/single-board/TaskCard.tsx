import Image from "next/image";
import React from "react";
import { BsStack } from "react-icons/bs";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";

const TaskCard = () => {
  return (
    <div className="flex flex-col gap-6 border w-full p-3 rounded-lg bg-white">
      {/* users here  */}
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2 font-semibold text-sm">
          <div>
            <Image
              src={`https://placehold.co/200x200`}
              height={100}
              width={100}
              className="h-8 w-8 rounded-full "
              alt="image"
            />
          </div>
          <div>Client Name</div>
        </div>
        <div className="flex items-center gap-2 font-semibold text-sm">
          <div>
            <Image
              src={`https://placehold.co/200x200`}
              height={100}
              width={100}
              className="h-8 w-8 rounded-full "
              alt="image"
            />
          </div>
          <div>Sadik Istiak</div>
        </div>
      </div>

      {/* actual task added here  */}
      <div className="flex justify-between items-center ">
        <div className="flex items-center gap-2 max-w-[80%] truncate">
          <span>
            <BsStack />
          </span>
          <span className="truncate">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </span>
        </div>
        <div className="flex gap-1 items-center font-semibold">
          <FaCalendarAlt />
          <span>1/2</span>
        </div>
      </div>

      {/* card footer  */}
      <div className="flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2 font-semibold text-sm">
          <div>
            <Image
              src={`https://placehold.co/200x200`}
              height={100}
              width={100}
              className="h-8 w-8 rounded-full "
              alt="image"
            />
          </div>
        </div>
        <div>12+</div>
        <div className="flex gap-2 items-center">
          <FaComments /> 15
        </div>
        <div className="flex gap-2 items-center">
          <GrAttachment />
          25
        </div>
        <div className="flex gap-2 items-center">
          <FaRegCalendarDays /> 25-10-1998
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
