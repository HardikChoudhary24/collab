import React from 'react'
import { Button } from './ui/button';
import { Youtube } from "lucide-react";

const VideoCard = () => {
  return (
    <div className="bg-gray-50 w-full py-7 my-4 rounded-lg flex flex-col items-center px-4">
      <div className="flex justify-between items-start w-full">
        <div className="w-[190px] h-[107px] border-black border-2"></div>
        <div className="flex flex-col justify-between items-center">
          <p className="font-semibold text-lg">
            Status: <span className="font-normal">Pending</span>
          </p>
          <Button size="lg" className="mt-6">
            Preview <Youtube width={25} height={25} className='ml-2'/>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default VideoCard
