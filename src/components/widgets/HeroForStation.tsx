import React from "react";
import HeroBack from "@/assets/HeroBackground.svg";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroForStations = ({...props}:any) => {

  const {image, size, title} = props

  return (
    <div className="relative w-full font-plus-jakarta">
      <div className="bg-[#221D1A] flex justify-end">

      <Image height={size?.height || 300} src={image ||"/mainpage3.gif"} width={size?.width || 1500} className=" " alt="Hero Background" />
      </div>
      <div className="absolute inset-y-0 left-0 flex items-center   ml-8 bg-gradient-to-r from-[#221d1a4b] from-70%    via-[#221d1a] via-30% ">
        <div className="text-left w-[100%] md:w-[100%] flex flex-col gap-2"> 
          <h1 className="text-2xl md:text-7xl text-white font-plus-jakarta font-extrabold uppercase">
            Instant
          </h1>
          <h3 className="uppercase text-lg md:text-4xl font-bold text-orange ">
            {title || "London City airport"}
          </h3>
          <h2 className="uppercase text-xl md:text-4xl text-white">
            taxi quote
          </h2>
          <Button className="bg-orange text-white w-fit">Book now</Button>
        </div>
      </div>
    </div>
  );
};

export default HeroForStations;
