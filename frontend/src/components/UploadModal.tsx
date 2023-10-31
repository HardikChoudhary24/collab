"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Label } from "@radix-ui/react-menu";
import { Input } from "./ui/input";
import { ArrowUpFromLine, Inbox } from "lucide-react";
type props = {
  color:string
  textColor:string
}
const UploadModal = ({ color, textColor }: props) => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className={ `${color} ${textColor} py-2 px-5 rounded-md text-[0.95rem] font-medium mx-2`}>Upload a video</div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload a video</DialogTitle>
          <DialogDescription>
            Fill in the details. Click upload once you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="title" placeholder="Video Title" className="text-sm" />
          </div>
          <div className="flex flex-col justify-start items-start gap-2">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input
              id="description"
              placeholder="Video Description"
              className="text-sm"
            />
          </div>
          <div className="w-full h-36 bg-white rounded-lg border-black border-[1px] p-1">
            <div className="w-full h-full bg-gray-50 rounded-lg border-black border-[1px] border-dashed flex flex-col justify-center items-center">
              <Inbox className="text-rose-500 w-8 h-8" />
              <p className="text-sm mt-2">Drop your Thumbnail here</p>
            </div>
          </div>
          <div className="w-full h-36 bg-white rounded-lg border-black border-[1px] p-1">
            <div className="w-full h-full bg-gray-50 rounded-lg border-black border-[1px] border-dashed flex flex-col justify-center items-center">
              <Inbox className="text-rose-500 w-8 h-8" />
              <p className="text-sm mt-2">Drop your Video here</p>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">
            Upload <ArrowUpFromLine className="w-4 h-4 ml-2" />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadModal;
