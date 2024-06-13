import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import Layouts from "./components/Layouts";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import CardGrafik from "./components/Cards/CardGrafik";
import CardCamera from "./components/Cards/CardCamera";
import TabelUltrasonic from "./components/Tabel/TabelPerangkat";
import TabelDesign from "./components/Tabel/TabelDesign";
import CardGrafik2 from "./components/Cards/CardGrafik2";
import CardCamera2 from "./components/Cards/CardCamera2"

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layouts>
        <SidebarMenu />
        <div className="w-full px-8">
          <div className="md:grid grid-cols-3 gap-4">
            <CardGrafik2 />
            <CardCamera />
          </div>
          <div className="md:grid grid-cols-2 gap-4 mb-8">
            <TabelUltrasonic />
            <TabelDesign data={Data}/>
          </div>
        </div>
      </Layouts>
    </QueryClientProvider>
    
  )
}

export default App;
