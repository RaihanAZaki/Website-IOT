import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import Layouts from ".././components/Layouts";
import TabelUltrasonic from "../components/Tabel/TabelUltrasonic";
import TabelKeruh from "../components/Tabel/TabelTurbidity";
import TabelPerangkat from "../components/Tabel/TabelPerangkat";

const queryClient = new QueryClient();

function Tabel() {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="w-full px-8">
      <div className="md:grid grid-cols-2 gap-8">
        <TabelUltrasonic />
        <TabelKeruh />
      </div>
      <div className="">
        <TabelPerangkat />
      </div>
    </div>
        
    </QueryClientProvider>
    
  )
}

export default Tabel
