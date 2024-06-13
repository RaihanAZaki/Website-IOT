import React from "react";
import ChartKekeruhan from "../Chart/ChartKekeruhan";

function CardGrafik() {
  return (
    <div className="col-span-2 flex flex-col justify-center h-full pt-4 pb-4">
      <div className="w-full sm:max-w-2xl md:max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Grafik Kekeruhan</h2>
        </header>
        <div className="p-3">
            <ChartKekeruhan />
        </div>
      </div>
    </div>
  );
}

export default CardGrafik;
