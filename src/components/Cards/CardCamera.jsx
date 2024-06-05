import React from "react";
import ChartKekeruhan from "../Chart/ChartKekeruhan";

function CardCamera() {
  return (
    <div className="col-span-1 flex flex-col justify-center h-full pt-4">
      <div className="w-full h-full sm:max-w-2xl md:max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Live Camera</h2>
        </header>
        <div className="p-3 h-full overflow-hidden">
          <iframe src="http://192.168.1.200:81/stream" frameborder="0" className='w-full h-full max-h-[215px] overflow-visible'></iframe>
        </div>
      </div>
    </div>
  );
}

export default CardCamera;
