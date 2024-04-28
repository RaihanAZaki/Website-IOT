import React from 'react'

function TabelKeruh() {

  const Data = [
    {
      no: 1,
      tanggal: "25/04/2024",
      nilai: "250",
      tingkat: "Normal ( Air Bersih )"
    },
    {
      no: 2,
      tanggal: "26/04/2024",
      nilai: "270",
      tingkat: "Normal ( Air Bersih )"
    },
    {
      no: 3,
      tanggal: "27/04/2024",
      nilai: "450",
      tingkat: "Sedang ( Tetap Waspada! )"
    },
    {
      no: 4,
      tanggal: "28/04/2024",
      nilai: "750",
      tingkat: "Tinggi ( Mesin  Bergerak )"
    },
    {
      no: 5,
      tanggal: "29/04/2024",
      nilai: "782",
      tingkat: "Tinggi ( Mesin  Bergerak )"
    },
  ]
  return (
    <div className='col-span-1 pt-8 '>
        <div className='rounded-md border-2 border-DarkPurple p-4 w-full'>
            <div className='flex justify-center'>
                <h1 className='text-DarkPurple font-bold text-lg md:text-xl mb-4'>Tabel Kekeruhan</h1>
            </div>
            <div className='p-2'>
              <table className=''>
                <tr className='text-center text-sm border-2 border-b-DarkPurple'>
                  <th className='px-2 py-2 w-16'> No </th>
                  <th className='px-2 py-2 w-36'> Tanggal </th>
                  <th className='px-2 py-2 w-36'> Nilai </th>
                  <th className='px-2 py-2 w-96'> Tingkat Keruh </th>
                </tr>
                {Data.map((data, index) => ( 
                <tr key={index} className='text-center text-sm border-2 border-b-DarkPurple'>
                  <td className='px-2 py-2 w-16'> {data.no} </td>
                  <td className='px-2 py-2 w-36'> {data.tanggal} </td>
                  <td className='px-2 py-2 w-36'> {data.nilai} </td>
                  <td className='px-2 py-2 w-96'> {data.tingkat} </td>
                </tr>
              ))}
              </table>
            </div>
        </div>
    </div>
  )
}

export default TabelKeruh
