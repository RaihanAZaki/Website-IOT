import React from 'react'

function TabelPerangkat() {

  const Data = [
    {
      no: 1,
      kode: "KP-A01",
      nama: "Ultrasonic",
      gambar: "../assets/image/ultrasonic.png",
      status: 1,
    },
    {
      no: 2,
      kode: "KP-B02",
      nama: "Turbidity",
      gambar: "../assets/image/turbidity.png",
      status: 1,
    },
    {
      no: 3,
      kode: "KP-A03",
      nama: "Kamera",
      gambar: "../assets/image/kamera.png",
      status: 0,
    },
    {
      no: 4,
      kode: "KP-C02",
      nama: "Motor DC",
      gambar: "../assets/image/turbidity.png",
      status: 1,
    },
    {
      no: 5,
      kode: "KP-C03",
      nama: "Pompa Air",
      gambar: "../assets/image/kamera.png",
      status: 1,
    },
    {
      no: 6,
      kode: "KP-D01",
      nama: "Kran Otomatis",
      gambar: "../assets/image/kamera.png",
      status: 0,
    },
  ]
  return (
    <div className="flex flex-col justify-center h-full pt-4">
      <div className="w-full sm:max-w-2xl md:max-w-full mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
        <header className="px-5 py-4 border-b border-gray-100">
          <h2 className="font-semibold text-gray-800">Tabel Perangkat</h2>
        </header>
        <div className="p-3">
          <div className="overflow-x-auto">
            <table className="sm:inline-table w-full flex flex-row sm:bg-white  overflow-hidden">
              <thead className="sm:text-xs text-sm font-semibold uppercase text-gray-400 bg-gray-50">
                {Data?.map((data, index) => (
                  <tr
                    className={`bg-[#222E3A]/[6%] flex flex-col sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0 ${
                      index == 0 ? "sm:flex" : "sm:hidden"
                    }`}
                  >
                    <th className="py-3 px-5 text-left border border-b rounded-tl-lg sm:rounded-none">
                      ID
                    </th>
                    <th className="py-3 px-5 text-left border border-b">
                     Kode Perangkat
                    </th>
                    <th className="py-3 px-5 text-left border border-b">
                      Nama Perangkat
                    </th>
                    <th className="py-3 px-5 text-left border border-t rounded-bl-lg sm:rounded-none">
                      Status Perangkat
                    </th>
                  </tr>
                ))}
              </thead>
              <tbody className="sm:text-xs text-sm flex-1 sm:flex-none">
                {Data?.map((data, index) => (
                  <tr className="flex flex-col sm:table-row mb-2 sm:mb-0" key={index}>
                    <td className="border hover:bg-[#222E3A]/[6%] hover:sm:bg-transparent py-3 px-5">
                      {data?.no}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                      {data?.kode}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5">
                      {data?.nama}
                    </td>
                    <td className="border hover:bg-[#222E3A]/[6%]  hover:sm:bg-transparent py-3 px-5 cursor-pointer">
                      {data.status === 1 ? 'Aktif' : 'Tidak'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabelPerangkat
