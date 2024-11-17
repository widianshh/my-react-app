import { GaleryJson } from "../api/galeryApi";
import Card from "../components/Card";
import Hero from "../components/Hero";
import JobsItemCard from "../components/JobsItemCard";
import SearchBox from "../components/SearchBox";
// import { useParams } from "next/navigation";
import { useNavigate, useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";

function JobsByCategory() {
  const params = useParams();
  const category = params.category;
  const [isVisible, setIsVisible] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState(null);

  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const dataJson = GaleryJson.getJobsByCategory(category.replace("%20", " "));
    setData(dataJson);
  }, []);

  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {};

  useEffect(() => {
    if (selectedFilter != null) {
      navigate("/jobs/category/" + selectedFilter);
    }
  }, [selectedFilter, navigate]);

  const filterOptions = [
    "UI-UX Design",
    "Programmer",
    "Illustrator",
    "Web Design",
    "Writing",
    "Photography",
    "Interfaces",
    "Strategy",
  ];

  const handleFilterSelect = (filter) => {
    setSelectedFilter(filter === selectedFilter ? null : filter); // toggle filter selection
  };

  return (
    <div>
      <Hero
        title="Jobs Board"
        subtitle="Find the best job vacancies here! Find your dream job with a variety of 
attractive options from leading companies.
 Register now and find the career opportunities that suit you."
      />
      <div className="flex w-full items-center justify-center gap-5 mt-20 mb-36">
        <SearchBox className="w-full">
          <div className="flex items-center gap-3 w-full">
            <FaSearch color="#9D9D9D" />
            <input
              className="bg-transparent w-full py-2 ring-transparent border-none focus:outline-none focus:ring-0 text-[#9D9D9D]"
              placeholder="What are you looking for"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              className="px-4 py-2 bg-[#B04E75] rounded-lg text-white"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </SearchBox>
        <div className="relative inline-block text-left">
          <button
            onClick={toggleVisibility}
            className={`w-[171px] py-4 mt-1 bg-white rounded-3xl text-[#B04E75] border-4 border-[#B04E75] transition-all duration-500 ease-in-out overflow-hidden ${
              isVisible ? "h-56" : "h-20"
            }`}
          >
            <div className="text-center">
              {selectedFilter ? selectedFilter : "Filter"}
            </div>

            {/* Dropdown content within button */}
            {isVisible && (
              <div className="pt-2 pb-4 text-center text-[#B04E75] space-y-1">
                {filterOptions.map((filter) => (
                  <p
                    key={filter}
                    onClick={() => handleFilterSelect(filter)}
                    className={`cursor-pointer ${
                      selectedFilter === filter
                        ? "text-white bg-[#B04E75] rounded-lg px-2"
                        : ""
                    }`}
                  >
                    {filter}
                  </p>
                ))}
              </div>
            )}
          </button>
        </div>
      </div>
      <div className="bg-[#99999926] w-[100%] py-10 mt-10 mx-auto ">
        <h1 className="text-2xl font-bold text-white text-shadow-glow text-center my-auto">
          {category.replace("%20", " ")}
        </h1>
      </div>

      <div className="w-[90%] mx-auto px-4 mt-4">
        <div className="">
          {data.map((item, index) => (
            <div className="mt-10" key={index}>
              <JobsItemCard key={index} item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobsByCategory;
