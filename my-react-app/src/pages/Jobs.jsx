"use client";
import React, { useEffect, useState } from "react";
import Hero from "../components/Hero";
import SearchBox from "../components/SearchBox";
import { FaSearch } from "react-icons/fa";
import JobsCard from "../components/JobsCard";
import { GaleryJson } from "../api/galeryApi";
import JobsItemCard from "../components/JobsItemCard";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function Jobs() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);
  const [categories, setCategories] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);

  const toggleVisibility = () => setIsVisible((prev) => !prev);

  useEffect(() => {
    const dataCategory = GaleryJson.getCategories();
    const dataJobs = GaleryJson.getJobs();
    setCategories(dataCategory);
    setJobs(dataJobs);
    setFilteredJobs(dataJobs); // Initialize filteredJobs with all jobs

    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  useEffect(() => {
    if (selectedFilter != null) {
      navigate("/jobs/category/" + selectedFilter);
    }
  }, [selectedFilter, navigate]);

  const handleSearch = () => {
    // Ensure jobs array is filtered based on search query
    const searchResults = jobs.filter((job) =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log("Search Results:", searchResults); // Debug line
    setFilteredJobs(searchResults);
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

  return (
    <div>
      <Hero
        title="Jobs Board"
        subtitle="Find the best job vacancies here! Find your dream job with a variety of attractive options from leading companies. Register now and find the career opportunities that suit you."
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
              onKeyPress={(e) => {
                if (e.key === "Enter") handleSearch(); // Trigger search on Enter
              }}
            />
            <button
              className="md:w-[154px] px-4 py-2 bg-[#B04E75] rounded-2xl text-white"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </SearchBox>
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
            {isVisible && (
              <div className="pt-2 pb-4 text-center text-[#B04E75] space-y-1">
                {filterOptions.map((filter) => (
                  <p
                    key={filter}
                    onClick={() =>
                      setSelectedFilter(
                        filter === selectedFilter ? null : filter
                      )
                    }
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

      <div className="bg-[#99999926] w-[100%] py-10 mt-10 mx-auto">
        <h1 className="text-2xl font-bold text-white text-shadow-glow text-center my-auto">
          Popular Jobs Category
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 mx-4 sm:mx-8 md:mx-20">
        {categories.map((item, index) => (
          <div
            key={index}
            className="cursor-pointer"
            onClick={() => navigate("/jobs/category/" + item.name)}
          >
            <JobsCard item={item} />
          </div>
        ))}
      </div>

      <div className="bg-[#99999926] w-[100%] py-10 mt-10 mx-auto">
        <h1 className="text-2xl font-bold text-white text-shadow-glow text-center my-auto">
          Recent Post
        </h1>
      </div>

      <div className="mt-20 mx-4 sm:mx-8 md:mx-20">
        {filteredJobs.map((item, index) => (
          <div className="mt-10" key={index}>
            <JobsItemCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2 className="text-blue-400">About Page</h2>
    </div>
  );
}

export default Jobs;
