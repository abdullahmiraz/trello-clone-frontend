/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import axios from "axios";

interface IFileUploadProps {
  setViewModalOpen: any;
  refetch: any;
}

const FileUpload = ({ setViewModalOpen, refetch }: IFileUploadProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files));
    }
  };

  const uploadFile = async (event: React.FormEvent) => {
    event.preventDefault();

    if (files.length === 0) {
      console.error("No files selected");
      return;
    }

    const formData = new FormData();
    files.forEach((file) => formData.append("files", file));

    setIsLoading(true);

    try {
      const response = await axios.post(
        "http://localhost:5000/api/upload", // Backend API endpoint
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Files Uploaded Successfully: ", response.data);
      setFiles([]);
      if (response?.data?.message) {
        setViewModalOpen(false);
        refetch();
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        console.error("Axios Error:", err.message);
        if (err.response) {
          console.error("Response Status:", err.response.status);
          console.error("Response Data:", err.response.data);
        } else if (err.request) {
          console.error("Request Data:", err.request);
        } else {
          console.error("Error Details:", err);
        }
      } else {
        console.error("Non-Axios Error:", err);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={uploadFile}>
        <div className=" ">
          <Input
            id="picture"
            type="file"
            multiple
            onChange={handleFileChange}
          />
          {/* Display the list of selected files */}
          {files.length > 0 && (
            <div className="mt-2">
              <p>Selected files:</p>
              <ul>
                {files.map((file, index) => (
                  <li key={index}>{file.name}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-4 py-1 rounded-lg bg-blue-500 text-white"
          >
            {isLoading ? "File Is Uploading ...." : "Upload File"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileUpload;
