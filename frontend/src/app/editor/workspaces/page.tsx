"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { PiTrayBold } from "react-icons/pi";
import Container from "@/components/Container";
import { IconContext } from "react-icons";
import { Divide, Inbox } from "lucide-react";
import UploadModal from "@/components/UploadModal";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const page = () => {
  return (
    <div className="w-screen min-h-screen  bg-gradient-to-r from-rose-100 to-teal-100">
      <Container itemAlign="items-center">
        <div className="flex flex-col justify-start items-center relative">
          <h1 className="mx-10 mt-10 mb-0 text-3xl font-semibold">
            Upload your videos and get them approved!
          </h1>
          <div className="px-40">
            <p className="text-lg font-medium m-5 text-center mx-40 text-gray-600">
              Collab is the easiest way to collaborate on YouTube videos. Save
              time and simplify your workflow with Collab.
            </p>
          </div>
          {/* <div className="flex items-center justify-center my-2">
            <Button className="mx-2" size="lg">
              Change Workspace
            </Button>
            <Button variant="secondary" className="mx-2" size="lg">
              Join a Workspace
            </Button>
          </div> */}
          <div className="bg-white rounded-full my-6 flex justify-center items-center">
            <Avatar className="w-[8rem] h-[8rem]">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <h2 className="text-lg font-semibold my-3">Workspace Name</h2>
          <div className="flex items-center justify-center my-2">
            <Button className="mx-2" size="lg">
              View uploads
            </Button>
            <UploadModal color="bg-gray-100" textColor="text-black" />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default page;
