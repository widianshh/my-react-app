"use client";
import { GaleryJson } from "../api/galeryApi";
import Spinner from "../components/Spiner";

import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

function JobsDetail() {
  const params = useParams();
  const id = params.id;
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const jobApi = GaleryJson.getJobById(1);
      setJob(jobApi);
      setLoading(false);
    }, 1200);
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="bg-[#99999926] w-[1333px] h-[850px] py-10 mt-10 mx-auto rounded-lg px-6 lg:px-10 text-start">
      <h1
        className="text-[36px] text-white text-center lg:text-left font-bold"
        style={{ fontWeight: "700" }}
      >
        Job Detail
      </h1>
      <div className="flex flex-row justify-between mt-[51px]">
        <div className="w-[496px]">
          <h1 className="mt-5 text-[32px] font-bold text-white">
            Open Position for UI/UX Designer
          </h1>
          <p className="text-white mt-4 font-bold text-[24px]">
            About Sevanam:
          </p>
          <p
            className="text-white mt-2 text-[20px] font-normal text-justify"
            style={{ fontWeight: 500, lineHeight: "normal", color: "#FFF" }}
          >
            Established since 2020, PT. Sevanam Teknologi Solusindo is engaged
            in Software Development, especially Microfinance Institutions that
            focus on Customer Centric towards Customer Satisfaction. Serving 60+
            Customers spread across Bali, Central and Eastern Indonesia.
          </p>

          <p className="text-white mt-4 font-bold text-[24px]">Requirements:</p>
          <p
            className="text-white mt-2 text-[20px] font-normal text-justify"
            style={{ fontWeight: 500, lineHeight: "normal", color: "#FFF" }}
          >
            Technical understanding of how to perform software testing. Ability
            to perform concrete problem solving in software. Ability to identify
            bugs, errors/defects, and provide input on specific improvements
            needed. Ability to document software testing results based on
            findings during the testing process.
          </p>
        </div>

        <div className="w-[536px] mt-6 lg:mt-0">
          <div className="flex flex-col lg:flex-row gap-4 items-start">
            <img
              id="image-company"
              className="rounded object-cover h-full"
              src="/images/source-image.png"
              height={150}
              width={150}
              alt={job.company}
            />
            <div className="flex flex-col gap-3 justify-between">
              <h2 className="text-white text-xl lg:text-2xl font-medium">
                {job.company}
              </h2>
              <button className="bg-[#B04E75] rounded-[33px] shadow-lg px-4 py-2 text-white">
                Visit Company
              </button>
            </div>
          </div>
          <div className="mt-[65px] w-full">
            <img
              src="/images/image (4).png"
              className="w-[563px] h-[414px]"
              alt={job.title}
            />
          </div>
        </div>
      </div>
      <button className="bg-[#B04E75] rounded-[33px] shadow-lg px-4 py-2 text-white -translate-y-6 w-[197px] h-[63px] mt-8">
        Apply Now
      </button>
    </div>
  );
}

export default JobsDetail;
