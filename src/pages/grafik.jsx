import React from "react";
import {QueryClientProvider, QueryClient} from "@tanstack/react-query"
import ChartKekeruhan from "../components/Chart/ChartKekeruhan";
import ChartJarak from "../components/Chart/ChartJarak";
import CardGrafik2 from "../components/Cards/CardGrafik2";
import CardGrafik from "../components/Cards/CardGrafik";

const queryClient = new QueryClient();

function Grafik() {
  return (
    <QueryClientProvider client={queryClient}>
        <div className="w-full px-8">
          <div className="md:grid grid-rows-2 gap-4">
            <CardGrafik2 />
            <CardGrafik />
          </div>
        </div>
    </QueryClientProvider>
    
  )
}

export default Grafik
