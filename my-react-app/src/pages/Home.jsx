"use client";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import Card from "../components/Card";

import AOS from "aos";
import "aos/dist/aos.css";
import { GaleryJson } from "../api/galeryApi";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState(""); // state for search input
  const [isVisible, setIsVisible] = useState(false); // state for filter visibility
  const [selectedFilter, setSelectedFilter] = useState(null); // state for selected filter
  const [data, setData] = useState([]);
  const toggleVisibility = () => {
    setIsVisible((prev) => !prev);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    const data = GaleryJson.getAllData();
    setData(data);
  }, []);

  // Filtered data based on the search query and selected filter
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    if (selectedFilter == null) {
      alert("Ops, tolong pilih kategori jobs dulu !");
    } else {
    }
  };

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
    <div className="">
      <Hero title="Home" />
      <div className="flex flex-col md:flex-row w-full items-center justify-center gap-5 mt-10 md:mt-20 mb-20 md:mb-36 px-4">
        <SearchBox className="w-full md:w-auto flex-1">
          <div className="flex items-center gap-3 w-full">
            <FaSearch color="#9D9D9D" />
            <input
              className="bg-transparent w-full py-2 ring-transparent border-none focus:outline-none focus:ring-0 text-[#9D9D9D] placeholder-[#9D9D9D]"
              placeholder="What are you looking for"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // update search query
            />
            <button
              className="md:w-[154px] px-4 py-2 bg-[#B04E75] rounded-2xl text-white"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </SearchBox>

        {/* Filter Button with Dropdown */}
        <div className="relative inline-block text-left">
          <button
            onClick={toggleVisibility}
            className={`w-full md:w-[171px] px-4 py-2 bg-white rounded-3xl text-[#B04E75] border-4 border-[#B04E75] transition-all duration-500 ease-in-out overflow-hidden ${
              isVisible ? "h-56" : "h-12"
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

      {/* Content */}
      <div className="w-[80%] mx-auto px-4 mt-4">
        <div className="grid grid-cols-4 gap-6">
          {filteredData.map((item, index) => (
            <Card
              key={index}
              image={item.image}
              name={item.name}
              id={item.id}
            />
          ))}
        </div>
      </div>
      {/* Show More Button */}
      <div className="w-full mx-auto flex justify-center my-10">
        <button className="bg-[#B04E75] text-white rounded-3xl py-2 px-6 md:py-3 md:px-8">
          Show More
        </button>
      </div>
    </div>
  );
}
