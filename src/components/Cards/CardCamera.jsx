import React, { useRef } from 'react';
import { RiShutDownLine } from "react-icons/ri";
import Webcam from "react-webcam";

function CardCamera() {
    const videoConstraints = {
      width: { min: 200 },
      height: { min: 200 },
      aspectRatio: 1
    };

    return (
        <div className='col-span-1 pt-8'>
            <div className='rounded-md border-2 border-DarkPurple p-4 w-full'>
                <div className='flex justify-center'>
                    <h1 className='text-DarkPurple font-bold text-lg md:text-xl mb-4'>Live Camera</h1>
                </div>
                <div className='md:flex justify-center items-center'>
                    <Webcam 
                    videoConstraints={videoConstraints} 
                    width={207} 
                    height={208}
                    className='mb-2 rounded-lg mr-4 w-full md:w-[207px]'
                    />
                    <button className='flex items-center justify-center p-2 rounded-md w-full md:rounded-full md:w-40 md:h-40 bg-white border-2 border-DarkPurple hover:bg-DarkPurple/5 text-4xl text-DarkPurple font-bold'>
                        <RiShutDownLine />
                    </button>  
                </div>  
            </div>
        </div>
    );
}

export default CardCamera;
