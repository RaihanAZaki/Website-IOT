<<<<<<< HEAD
import React, { useState, useMemo, useEffect } from "react";

function TabelPerangkat() {
  const rowsLimit = 5; // Mengatur jumlah maksimal data per halaman menjadi 5
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    fetch("http://localhost/esprehang/api/api.php/perangkat?limit=10")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const totalPage = useMemo(() => Math.ceil(data.length / rowsLimit), [data, rowsLimit]);

  const rowsToShow = useMemo(() => {
    const startIndex = currentPage * rowsLimit;
    return data?.slice(startIndex, startIndex + rowsLimit);
  }, [currentPage, data, rowsLimit]);

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
    <div className="flex flex-col pt-4 pb-4">
=======
import React, { useState, useMemo, useEffect  } from "react";

function TabelUltrasonic() {
    const rowsLimit = 5; // Mengatur jumlah maksimal data per halaman menjadi 5
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);

    useEffect(() => {
      fetch("http://localhost/esprehang/api/api.php/ultrasonic?limit=10")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, []);
  
    const totalPage = useMemo(() => Math.ceil(data.length / rowsLimit), [
      data,
      rowsLimit,
    ]);
  
    const rowsToShow = useMemo(() => {
      const startIndex = currentPage * rowsLimit;
      return data?.slice(startIndex, startIndex + rowsLimit);
    }, [currentPage, data, rowsLimit]);
  
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
    <div className="flex flex-col pt-4">
>>>>>>> f01fa68a58ebaa121187c1c5b3c3767359b7a77d
      <div className="w-full sm:max-w-2xl md:max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Tabel Ultrasonic</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="sm:inline-table w-full flex flex-row sm:bg-white overflow-hidden">
              <thead className="sm:text-xs text-sm font-semibold uppercase text-gray-400 bg-gray-50">
                {rowsToShow?.map((data, index) => (
                  <tr
                    className={`bg-[#222E3A]/[6%] flex flex-col sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ${
                      index === 0 ? "sm:flex" : "sm:hidden"
                    }`}
                    key={index}
                  >
                    <th className="py-3 px-5 text-left border border-b rounded-tl-lg sm:rounded-none">
                      ID
                    </th>
                    <th className="py-3 px-5 text-left border border-b">
<<<<<<< HEAD
                      Nama
=======
                     Kode
                    </th>
                    <th className="py-3 px-5 text-left border border-b">
                      Jarak
>>>>>>> f01fa68a58ebaa121187c1c5b3c3767359b7a77d
                    </th>
                    <th className="py-3 px-5 text-left border border-b">
                      Deskripsi
                    </th>
                    <th className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none">
<<<<<<< HEAD
                      Tanggal
=======
                    Tanggal
>>>>>>> f01fa68a58ebaa121187c1c5b3c3767359b7a77d
                    </th>
                  </tr>
                ))}
              </thead>
              <tbody className="sm:text-xs text-sm flex-1 sm:flex-none">
                {rowsToShow?.map((data, index) => (
                  <tr className="flex flex-col sm:table-row mb-2 sm:mb-0" key={index}>
<<<<<<< HEAD
                    <td className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5 overflow-hidden text-ellipsis whitespace-nowrap">
                      {data?.id}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5 overflow-hidden text-ellipsis whitespace-nowrap">
                      {data?.nama}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5 overflow-hidden text-ellipsis whitespace-nowrap">
                      {data?.deskripsi}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5 overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer">
=======
                    <td className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5">
                      {data?.id}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                      {data?.id_perangkat}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                      {data?.nilai_jarak}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
>>>>>>> f01fa68a58ebaa121187c1c5b3c3767359b7a77d
                      {data?.tanggal}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
<<<<<<< HEAD
          <div className="w-full flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
            <div className="sm:text-xs md:text-sm font-medium">
              Showing {currentPage === 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
              {currentPage === totalPage - 1
                ? data?.length
                : (currentPage + 1) * rowsLimit}{" "}
              of {data?.length} entries
=======
          <div className="w-full  flex justify-center sm:justify-between flex-col sm:flex-row gap-5 mt-1.5 px-1 items-center">
          <div className="sm:text-xs md:text-sm font-medium">
            Showing {currentPage === 0 ? 1 : currentPage * rowsLimit + 1} to{" "}
            {currentPage === totalPage - 1
                ? data?.length
                : (currentPage + 1) * rowsLimit}{" "}
            of {data?.length} entries
>>>>>>> f01fa68a58ebaa121187c1c5b3c3767359b7a77d
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
<<<<<<< HEAD
                  <img
                    src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg"
                    alt="Previous"
                  />
                </li>
                {[...Array(totalPage).keys()].map((index) => (
                  <li
                    className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px] border-solid border-[2px] bg-[#FFFFFF] cursor-pointer ${
                      currentPage === index
                        ? "text-DarkPurple border-DarkPurple"
=======
                  <img src="https://www.tailwindtap.com/assets/travelagency-admin/leftarrow.svg" alt="Previous" />
                </li>
                {[...Array(totalPage).keys()].map((index) => (
                  <li
                    className={`flex items-center justify-center w-[36px] rounded-[6px] h-[34px]  border-solid border-[2px] bg-[#FFFFFF] cursor-pointer ${
                      currentPage === index
                        ? "text-DarkPurple  border-DarkPurple"
>>>>>>> f01fa68a58ebaa121187c1c5b3c3767359b7a77d
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
<<<<<<< HEAD
                  <img
                    src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg"
                    alt="Next"
                  />
=======
                  <img src="https://www.tailwindtap.com/assets/travelagency-admin/rightarrow.svg" alt="Next" />
>>>>>>> f01fa68a58ebaa121187c1c5b3c3767359b7a77d
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default TabelPerangkat;
=======
export default TabelUltrasonic;
>>>>>>> f01fa68a58ebaa121187c1c5b3c3767359b7a77d
