import React, { useState, useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

// const fetchTest = async () => {
//     const api = await fetch("http://localhost:3232/sensor/jarak?limit=10");
//     const response = await api.json();
//     return response.jarak;
//   };

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

function TabelDesign() {
    // const { isLoading, isError, isSuccess, data } = useQuery({
    //     queryKey: ["features"],
    //     queryFn: fetchTest,
    //   });
    
    // if (isError) return <div> error... </div>;
    // if (isLoading) return <div> loading... </div>;

    const rowsLimit = 5; // Mengatur jumlah maksimal data per halaman menjadi 5
    const [currentPage, setCurrentPage] = useState(0);
  
    const totalPage = useMemo(() => Math.ceil(Data.length / rowsLimit), [
      Data,
      rowsLimit,
    ]);
  
    const rowsToShow = useMemo(() => {
      const startIndex = currentPage * rowsLimit;
      return Data?.slice(startIndex, startIndex + rowsLimit);
    }, [currentPage, Data, rowsLimit]);
  
    const nextPage = () => {
      setCurrentPage((prevPage) => prevPage + 1);
    };
  
    const previousPage = () => {
      setCurrentPage((prevPage) => prevPage - 1);
    };
  
    const changePage = (value) => {
      setCurrentPage(value);
    };
    
  return (
    <div className="flex flex-col justify-center h-full pt-4">
      <div className="w-full sm:max-w-2xl md:max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Tabel Jarak</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="sm:inline-table w-full flex flex-row sm:bg-white  overflow-hidden">
              <thead className="sm:text-xs text-sm font-semibold uppercase text-gray-400 bg-gray-50">
                {rowsToShow?.map((data, index) => (
                  <tr
                    className={`bg-[#222E3A]/[6%] flex flex-col sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ${
                      index == 0 ? "sm:flex" : "sm:hidden"
                    }`}
                  >
                    <th className="py-3 px-5 text-left border border-b rounded-tl-lg sm:rounded-none">
                      ID
                    </th>
                    <th className="py-3 px-5 text-left border border-b">
                     Tanggal
                    </th>
                    <th className="py-3 px-5 text-left border border-b">
                      Kode
                    </th>
                    <th className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none">
                      Jarak
                    </th>
                  </tr>
                ))}
              </thead>
              <tbody className="sm:text-xs text-sm flex-1 sm:flex-none">
                {rowsToShow?.map((data, index) => (
                  <tr className="flex flex-col sm:table-row mb-2 sm:mb-0" key={index}>
                    <td className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5">
                      {data?.no}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                      {data?.tanggal}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                      {data?.kode}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                      {data?.jarak}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="w-full  flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
          <div className="sm:text-xs md:text-lg">
            Showing {currentPage === 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
            {currentPage === totalPage - 1
                ? data?.length
                : (currentPage + 1) * rowsLimit}{" "}
            of {data?.length} entries
            </div>
            <div className="flex">
              <ul
                className="flex justify-center items-center gap-x-[10px] z-30"
                role="navigation"
                aria-label="Pagination"
              >
                <li
                  className={`prev-btn flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
                    currentPage === 0
                      ? "bg-[#cccccc] pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  onClick={previousPage}
                >
                  <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" alt="Previous" />
                </li>
                {[...Array(totalPage).keys()].map((index) => (
                  <li
                    className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px]  border-solid border-[2px] bg-[#FFFFFF] cursor-pointer ${
                      currentPage === index
                        ? "text-DarkPurple  border-DarkPurple"
                        : "border-[#E4E4EB]"
                    }`}
                    onClick={() => changePage(index)}
                    key={index}
                  >
                    {index + 1}
                  </li>
                ))}
                <li
                  className={`flex items-center justify-center w-[36px] rounded-[6px] h-[36px] border-[1px] border-solid border-[#E4E4EB] ${
                    currentPage === totalPage - 1
                      ? "bg-[#cccccc] pointer-events-none"
                      : "cursor-pointer"
                  }`}
                  onClick={nextPage}
                >
                  <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" alt="Next" />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabelDesign;
