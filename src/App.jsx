import React from "react";
import Layouts from "./components/Layouts";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import CardCamera from "./components/Cards/CardCamera";
import TabelUltrasonic from "./components/Tabel/TabelPerangkat";
import CardGrafikDashboard from "./components/Cards/CardGrafikDashboard";
import TabelKeruh from "./components/Tabel/TabelTurbidity";


function App() {
  return (
      <Layouts>
        <SidebarMenu />
        <div className="w-full px-8">
          <div className="md:grid grid-cols-3 gap-4">
            <CardGrafikDashboard />
            <CardCamera />
          </div>
          <div className="md:grid grid-cols-2 gap-4 mb-8">
            <TabelUltrasonic />
            <TabelKeruh/>
          </div>
        </div>
      </Layouts>    
  )
}

export default App;
