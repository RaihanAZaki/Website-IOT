import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import Layouts from "./components/Layouts";
import SidebarMenu from "./components/Sidebar/SidebarMenu";
import CardGrafik from "./components/Cards/CardGrafik";
import CardCamera from "./components/Cards/CardCamera";
import TabelPerangkat from "./components/Tabel/TabelPerangkat";
import TabelDesign from "./components/Tabel/TabelDesign";
import CardGrafik2 from "./components/Cards/CardGrafik2";
import CardCamera2 from "./components/Cards/CardCamera2";

const queryClient = new QueryClient();

function App() {
  const Data = [
    {
      no: 1,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "263",
    },
    {
      no: 2,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "288",
    },
    {
      no: 3,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "264",
    },
    {
      no: 4,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "1184",
    },
    {
      no: 5,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "288",
    },
    {
      no: 6,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "1184",
    },
    {
      no: 7,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "48",
    },
    {
      no: 8,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "18",
    },
    {
      no: 9,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "192",
    },
    {
      no: 10,
      kode: "KP-A01",
      tanggal: "2024-04-29",
      jarak: "8",
    },
  ]
  
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
            <TabelPerangkat/>
            <TabelDesign data={Data}/>
          </div>
        </div>
      </Layouts>
    </QueryClientProvider>
    
  )
}

export default App
