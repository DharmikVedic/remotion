import React from 'react'
import Card from './card'

export default function Zodiac({ data }) {
  return (
    <div className='bg-white flex items-center py-[50px] flex-col w-full h-full gap-10'>
      <h1 className="bg-gradient-to-r from-sky-400 via-blue-400 to-green-400 bg-clip-text text-transparent font-cera_medium  text-center text-[100px] text-white">
        Natal Planets
      </h1>
      <div className="grid grid-cols-2 gap-y-10 gap-x-20">
        <Card data={data} />
      </div>
    </div>
  )
}
