import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
 
const chartConfig = {
  type: "bar",
  height: 235,
  series: [
    {
      name: "Jarak",
      series: [{ data: [] }],
    },
  ],
  options: {
    xaxis: { categories: [] },
    chart: {
      toolbar: {
        show: false,
      },
    },
    title: {
      show: "",
    },
    dataLabels: {
      enabled: false,
    },
    colors: ["#081A51"],
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
      },
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    yaxis: {
      labels: {
        style: {
          colors: "#616161",
          fontSize: "12px",
          fontFamily: "inherit",
          fontWeight: 400,
        },
      },
    },
    grid: {
      show: false,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: {
        lines: {
          show: true,
        },
      },
      padding: {
        top: 5,
        right: 20,
      },
    },
    fill: {
      opacity: 0.8,
    },
    tooltip: {
      theme: "dark",
    },
  },
};
 
export default function ChartJarak() {
  const [chartData, setChartData] = useState(chartConfig);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost/esprehang/api/api.php/ultrasonic?limit=10"
        );
        const data = await response.json();

        const tanggal = data.map((entry) => entry.tanggal.slice(0, 10)); // Ambil hanya tanggal
        const nilai_jarak = data.map((entry) => entry.nilai_jarak);

        setChartData({
          ...chartConfig,
          series: [{ data: nilai_jarak }],
          options: {
            ...chartConfig.options,
            xaxis: { categories: tanggal },
          },
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return <Chart {...chartData} />;
}
