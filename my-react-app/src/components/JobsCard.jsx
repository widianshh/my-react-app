// import Image from "next/image";
import React from "react";

function JobsCard({ item }) {
  return (
    <div
      data-aos="fade-up"
      className="bg-[#99999926] rounded-lg px-2 py-2 w-[291px] h-[132px] flex  items-center"
    >
      <div className="flex gap-3 items-center">
        <img
          src={item.image}
          width={100}
          height={75}
          className="rounded-full h-16 w-16 "
          alt={item.name}
        />
        <div className="text-white font-bold text-lg">
          <h1>{item.name}</h1>
          <p className="font-thin text-white">{item.total} Jobs</p>
        </div>
      </div>
    </div>
  );
}

export default JobsCard;
