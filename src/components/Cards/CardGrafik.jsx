import React from 'react'
import ChartKekeruhan from '../Chart/ChartKekeruhan'

function CardGrafik() {
  return (
    <div className='col-span-2 pt-8'>
        <div className='rounded-md border-2 border-DarkPurple p-4 w-full'>
            <div className='flex justify-center'>
                <h1 className='text-DarkPurple font-bold text-lg md:text-xl mb-4'>Grafik Kekeruhan</h1>
            </div>
            <ChartKekeruhan className="duration-300"/>
        </div>
    </div>
  )
}

export default CardGrafik