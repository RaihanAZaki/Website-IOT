import React, { useState } from "react";
import { LuCamera, LuCameraOff  } from "react-icons/lu";
import Webcam from "react-webcam";

function CardCamera2() {
    const videoConstraintsOn = {
        width: { min: 200 },
        height: { min: 200 },
        aspectRatio: 1
      };
    
      const [cameraOn, setCameraOn] = useState(true);
      const [videoConstraints, setVideoConstraints] = useState(videoConstraintsOn);
    
      const handleToggleCamera = () => {
        setCameraOn((prevCameraState) => !prevCameraState);
        if (cameraOn) {
          setVideoConstraints(null); // Menonaktifkan webcam
        } else {
          setVideoConstraints(videoConstraintsOn); // Mengaktifkan webcam
        }
      };

  return (
    <div className="col-span-1 flex flex-col justify-center h-full pt-4">
      <div className="w-full sm:max-w-2xl md:max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Live Camera</h2>
        </header>
        <div className="md:flex items-center p-3">
          {cameraOn ? (
            <Webcam
              videoConstraints={videoConstraints}
              width={207}
              height={208}
              className="mb-2 rounded-lg mr-4 w-full md:w-[207px]"
            />
          ) : (
            <div className="flex justify-center items-center w-full h-full bg-gray-200 rounded-lg mr-4 mb-2">
              <p className="text-gray-600 p-4">Camera is turned off</p>
            </div>
          )}
          <button
            onClick={handleToggleCamera}
            className="flex items-center cursor-pointer justify-center p-2 rounded-md w-full md:rounded-full md:w-40 md:h-40 bg-white border-2 border-DarkPurple hover:bg-DarkPurple/5 text-4xl text-DarkPurple font-bold"
          >
            {cameraOn ? <LuCameraOff /> : <LuCamera /> }
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardCamera2;
