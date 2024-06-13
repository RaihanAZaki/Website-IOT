import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import Layouts from ".././components/Layouts";
import SidebarMenu from ".././components/Sidebar/SidebarMenu";
import CardCamera from "../components/Cards/CardCamera";
import CardKameraFull from "../components/Cards/CardCamera2";

const queryClient = new QueryClient();

function Kamera() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="w-full px-8">
          <CardKameraFull />
        </div>
    </QueryClientProvider>
    
  )
}

export default Kamera
