import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const FileUpload = () => {
  return (
    <div>
      <div>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture"></Label>
          <Input id="picture" type="file" />
        </div>
      </div>
    </div>
  );
};

export default FileUpload;
