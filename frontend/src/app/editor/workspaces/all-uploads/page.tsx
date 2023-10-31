
import Container from '@/components/Container';
import UploadModal from '@/components/UploadModal';
import VideoCard from '@/components/VideoCard';
import React from 'react'

const page = () => {
  return (
    <div className="w-screen min-h-screen  bg-gradient-to-r from-rose-100 to-teal-100">
      <Container itemAlign="items-start">
        <div className="flex flex-col items-center justify-center w-full">
          <div className="flex justify-between items-center w-full border-b-[1px] pb-2 px-2 border-gray-400 mt-32">
            <p className="text-2xl font-semibold text-gray-800">All Uploads</p>
            <UploadModal color="bg-rose-600" textColor="text-white" />
          </div>
          <div className='flex flex-col items-center gap-x-7 w-full'>
            <VideoCard />
            <VideoCard />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default page
