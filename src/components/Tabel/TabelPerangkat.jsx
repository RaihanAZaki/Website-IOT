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
  ]
  return (
    <div className='col-span-1 pt-8 '>
        <div className='rounded-md border-2 border-DarkPurple p-4 w-full'>
            <div className='flex justify-center'>
                <h1 className='text-DarkPurple font-bold text-lg md:text-xl mb-4'>Tabel Perangkat</h1>
            </div>
            <div className='p-2'>
              <table className=''>
                <tr className='text-center text-xs md:text-sm border-2 border-b-DarkPurple '>
                  <th className='px-2 py-2 w-12 '> No </th>
                  <th className='px-2 py-2 w-36'> Kode Perangkat </th>
                  <th className='px-2 py-2 w-36'> Nama Perangkat </th>
                  <th className='px-2 py-2 w-24 hidden md:block'> Gambar </th>
                  <th className='px-2 py-2 w-36'> status </th>
                </tr>
                {Data.map((data, index) => ( 
                <tr key={index} className='text-center text-xs md:text-sm border-2 border-b-DarkPurple '>
                  <td className='px-2 py-2 w-12 '> {data.no} </td>
                  <td className='px-2 py-2 w-36'> {data.kode} </td>
                  <td className='px-2 py-2 w-36'> {data.nama} </td>
                  <td className='px-2 py-2 w-24 items-center hidden md:block justify-center'> <img src={data.gambar} className='w-10 h-10' alt="Gambar" /> </td>
                  <td className="px-2 py-2 w-36"><p className={`${data.status === 0 ? 'bg-red-600' : data.status === 1 ? 'bg-green-600' : ''} text-white p-1 md:p-2 rounded-md text-xs`}> {data.status === 1 ? 'Aktif' : 'Tidak Aktif'} </p> </td>
                </tr>
              ))}
              </table>
            </div>
        </div>
    </div>
  )
}

export default TabelPerangkat
