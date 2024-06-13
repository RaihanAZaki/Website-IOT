import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import CardCamera from "../components/Cards/CardCamera";
import CardGrafikDashboard from "../components/Cards/CardGrafikDashboard";
import TabelUltrasonic from "../components/Tabel/TabelUltrasonic";
import TabelKeruh from "../components/Tabel/TabelTurbidity";



const queryClient = new QueryClient();

function Dashboard() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="w-full px-8">
          <div className="md:grid grid-cols-3 gap-4">
            <CardGrafikDashboard />
            <CardCamera />
          </div>
          <div className="md:grid grid-cols-2 gap-4 mb-8">
            <TabelKeruh />
            <TabelUltrasonic />
          </div>
        </div>
    </QueryClientProvider>
    
  )
}

export default Dashboard
