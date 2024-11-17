import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
function JobsItemCard({ item }) {
  const navigate = useNavigate();
  const params = useParams();
  const category = params.category;

  const handleDetail = () => {
    navigate(`/jobs/${item.id}`);
  };

  return (
    <div className="bg-[#99999926] rounded-[43px] px-2 py-6 w-[1274px] h-[207px]">
      <div
        className="flex gap-12 items-center mt-3 justify-between"
        data-aos="fade-up"
      >
        <img
          src={item.poster}
          className="w-[136px] h-[136px] ml-4"
          alt={item.title}
        />
        <div className="text-white font-bold text-lg flex flex-col justify-evenly w-[70%] text-start">
          <h1 className="text-[20px]" style={{ fontWeight: 500 }}>
            {item.company}
          </h1>
          <h1 className="text-[24px]" style={{ fontWeight: 800 }}>
            {item.title}
          </h1>
          <p className="font-thin text-[20px] mt-2" style={{ fontWeight: 500 }}>
            {item.about}
          </p>{" "}
        </div>
        <div className="w-[30%] flex items-center justify-end">
          <button
            onClick={handleDetail}
            className="bg-[#B04E75] w-[241px] h-[63px]  my-auto text-white mr-5 rounded-[22px]"
          >
            <div className="flex items-center gap-1 justify-center">
              <span className="text-[24px]" style={{ fontWeight: 500 }}>
                Learn More
              </span>{" "}
              <FaArrowRight color="white" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default JobsItemCard;
