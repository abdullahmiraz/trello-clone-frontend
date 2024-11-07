/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
import React, { useState } from "react";
import { BsStack } from "react-icons/bs";
import { FaCalendarAlt, FaComments } from "react-icons/fa";
import { FaRegCalendarDays } from "react-icons/fa6";
import { GrAttachment } from "react-icons/gr";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../../ui/dialog";
import FileUpload from "./file-upload/FileUpload";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const userImage1 = "/images/user1.jpg";
const userImage2 = "/images/user2.webp";

const TaskCard = () => {
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const handleView = () => {
    setViewModalOpen(true);
  };

  const getFolderDetails = async () => {
    try {
      const response = await axios.get(
        `https://trello-clone-backend-4uuy.onrender.com/api/folder-details`
      );
      console.log("Folder Details Response:", response.data);
      return response?.data || {};
    } catch (error) {
      console.log("Error fetching folder details:", error);
      return {};
    }
  };

  const {
    isLoading,
    isError,
    data: folderDetailsData = {},
    refetch,
  } = useQuery({
    queryKey: ["folderDetailsData"],
    queryFn: getFolderDetails,
  });

  console.log(folderDetailsData);

  return (
    <div className="flex flex-col gap-6 border w-full p-3 rounded-lg bg-white">
      {/* users here  */}
      <div className="flex justify-between gap-2">
        <div className="flex items-center gap-2 font-semibold text-sm">
          <div>
            <Image
              src={userImage1}
              height={100}
              width={100}
              className="h-8 w-8 rounded-full  object-cover"
              alt="image"
            />
          </div>
          <div>Client Name</div>
        </div>
        <div className="flex items-center gap-2 font-semibold text-sm">
          <div>
            <Image
              src={userImage2}
              height={100}
              width={100}
              className="h-8 w-8 rounded-full  object-cover"
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
      <div className="flex justify-between items-center font-semibold text-sm">
        <div className="flex items-center gap-2 font-semibold text-sm">
          <div>
            <Image
              src={userImage1}
              height={100}
              width={100}
              className="h-8 w-8 rounded-full  object-cover"
              alt="image"
            />
          </div>
        </div>
        <div>12+</div>
        <div className="flex gap-1 items-center">
          <FaComments /> 15
        </div>
        <div>
          <button
            onClick={() => handleView()}
            className="flex gap-1 items-center hover:bg-slate-200 p-1 rounded transition-all duration-400 "
          >
            <GrAttachment />
            <span> {folderDetailsData?.numberOfFiles} </span>
          </button>

          <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
            <DialogContent className="">
              <DialogHeader>
                <DialogTitle>Upload your file</DialogTitle>
              </DialogHeader>
              <FileUpload
                setViewModalOpen={setViewModalOpen}
                refetch={refetch}
               />
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex gap-1 items-center">
          <FaRegCalendarDays /> 25-10-1998
        </div>
      </div>
    </div>
  );
};

export default TaskCard;
