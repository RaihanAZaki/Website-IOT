import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import Layouts from "./components/Layouts";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import CardGrafik from "./components/Cards/CardGrafik";
import CardCamera from "./components/Cards/CardCamera";
import TabelKeruh from "./components/Tabel/TabelKeruh";
import TabelPerangkat from "./components/Tabel/TabelPerangkat";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layouts>
        <SidebarMenu />
        <div className="w-full px-8">
          <div className="md:grid grid-cols-3 gap-4">
            <CardGrafik />
            <CardCamera />
          </div>
          <div className="md:grid grid-cols-2 gap-4 mb-4">
            <TabelKeruh/>
            <TabelPerangkat/>
          </div>
        </div>
      </Layouts>
    </QueryClientProvider>
    
  )
}

export default App
