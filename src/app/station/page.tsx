"use client"
import CabHire from '@/components/widgets/CabHire'
import HeroForStations from '@/components/widgets/HeroForStation'
import React from 'react'

const page = () => {
  return (
    <div className='container'>

      <div className="">
        <HeroForStations image="/RAILWAY.gif" size={{height : 500, width:1000}}/>
      </div>
      <div className="relative mt-[-100px] md:mt-[-160px] z-50">
        <CabHire />
      </div>

    </div>
  )
}

export default page