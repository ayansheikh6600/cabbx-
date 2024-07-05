"use client"
import CabHire from '@/components/widgets/CabHire'
import Hero from '@/components/widgets/Hero'
import HeroForStations from '@/components/widgets/HeroForStation'
import React from 'react'


const page = () => {
  return (
    <div className='container'>

      <div className="">
        <HeroForStations image="/airport-animation.gif" size={{height : 100, width:800}}/>
      </div>
      <div className="relative mt-[-100px] md:mt-[-160px] z-50">
        <CabHire />
      </div>

    </div>
  )
}

export default page