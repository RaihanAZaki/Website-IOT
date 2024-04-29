import React from "react";
import { RiShutDownLine } from "react-icons/ri";
import Webcam from "react-webcam";

function CardCamera2() {
    const videoConstraints = {
        width: { min: 200 },
        height: { min: 200 },
        aspectRatio: 1
    }
  return (
    <div className="col-span-1 flex flex-col justify-center h-full pt-4">
      <div className="w-full sm:max-w-2xl md:max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Live Camera</h2>
        </header>
        <div className="md:flex items-center p-3">
            <Webcam 
            videoConstraints={videoConstraints} 
            width={207} 
            height={208}
            className='mb-2 rounded-lg mr-4 w-full md:w-[207px]'
            />
             <button className='flex items-center cursor-pointer justify-center p-2 rounded-md w-full md:rounded-full md:w-40 md:h-40 bg-white border-2 border-DarkPurple hover:bg-DarkPurple/5 text-4xl text-DarkPurple font-bold'>
                <RiShutDownLine />
            </button>  
        </div>
      </div>
    </div>
  );
}

export default CardCamera2;
