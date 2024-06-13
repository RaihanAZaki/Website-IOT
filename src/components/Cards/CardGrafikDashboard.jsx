import React from "react";
import ChartDashboard from "../Chart/ChartDashboard";


function CardGrafikDashboard() {
  return (
    <div className="col-span-2 flex flex-col justify-center h-full pt-4">
      <div className="w-full sm:max-w-2xl md:max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Grafik Jarak</h2>
        </header>
        <div className="p-3">
            <ChartDashboard />
        </div>
      </div>
    </div>
  );
}

export default CardGrafikDashboard;
