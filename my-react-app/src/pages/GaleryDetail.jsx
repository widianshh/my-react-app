import { useParams } from "react-router-dom";
import { GaleryJson } from "../api/galeryApi";
import { useEffect, useState } from "react";
// import Image from "next/image";
import { FaBookmark, FaList, FaListAlt, FaShare, FaStar } from "react-icons/fa";
import Carousel from "../components/Carousel";

const GalleryDetail = () => {
  const params = useParams();
  const id = params.id;
  const [loading, setLoading] = useState(true);
  const [galery, setGalery] = useState({});
  const [galeries, setGaleries] = useState([]);

  useEffect(() => {
    setGaleries(GaleryJson.getAllData());
  }, []);

  const reviews = [
    {
      name: "Fikko Muharavid",
      rating: 5,
      review:
        "I will design a beautiful website for your business, I will help you.",
    },
    {
      name: "Fikko Muharavid",
      rating: 5,
      review:
        "I will design a beautiful website for your business, I will help you.",
    },
    {
      name: "Fikko Muharavid",
      rating: 5,
      review:
        "I will design a beautiful website for your business, I will help you.",
    },
    {
      name: "Fikko Muharavid",
      rating: 5,
      review:
        "I will design a beautiful website for your business, I will help you.",
    },
  ];

  useEffect(() => {
    const galeryDetail = GaleryJson.getById(id);
    setGalery(galeryDetail);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading . . .</div>;
  }

  return (
    <div>
      <div className="bg-[#99999926] w-[90%] md:w-[80%] pb-10 mt-20 mx-auto rounded-xl">
        <div className="flex flex-col items-start">
          <div className="flex flex-col justify-center w-full">
            <div className="flex justify-center mt-4 mb-6">
              <img
                alt="profile picture"
                width={70}
                height={70}
                className="border-2 border-white rounded-full"
                src="/profile.png"
              />
            </div>
            <h3 className="text-shadow-glow text-white text-center text-2xl md:text-3xl">
              Kylie Jenner - Designer
            </h3>
            <div className="flex justify-center mt-4">
              <button className="bg-[#B04E75] rounded-xl text-white px-4 py-2 md:px-6 md:py-3">
                Lest Collaborative
              </button>
            </div>
          </div>

          <div className="flex justify-center w-full px-4 md:px-0">
            <img
              alt="profile picture"
              className="rounded-xl mt-10 h-[614.307px] w-[944px]"
              src="/images/category/detail.png"
            />
          </div>

          <div className="flex justify-between w-full items-center mt-10">
            <h2 className="text-white text-2xl px-32 font-bold text-start">
              {galery.name}
            </h2>
            <div className="flex gap-4 items-center mx-32 mt-4 md:mt-0 ">
              <div className="flex gap-4 items-center mt-4 md:mt-0">
                <img
                  src="/images/category/collection.png"
                  className="h-[30px]"
                  alt=""
                />
                <img
                  src="/images/category/Share.png"
                  className="h-[30px]"
                  alt=""
                />
                <img
                  src="/images/category/edite.png"
                  className="h-[30px]"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className=" text-white font-thin tracking-widest px-32 mt-5 w-[850px] text-justify">
            <p
              style={{
                color: "white",
                fontFamily: "inter",
                fontSize: "20px",
                fontStyle: "normal",
                fontWeight: "500",
              }}
            >
              By creating a visual guide along the way, the designer or
              developer can get input from the other people involved in the
              website such as the customer, their manager, and other members of
              the team.{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 md:mt-20 mx-4 md:mx-20">
        {reviews.map((review, index) => (
          <div
            className="text-white bg-[#99999926] w-full md:w-[90%] pb-10 mt-6 mx-auto rounded-[43px] p-4 items-center"
            key={index}
          >
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center">
              <img
                alt="profile picture"
                className="border-2 border-white rounded-full h-[115px] w-[115px] my-auto"
                src="/profile.png"
              />
              <div className="flex justify-between items-center w-full">
                <div>
                  <h4
                    className="text-white font-bold mb-2 text-[32px]"
                    style={{ fontWeight: "800px" }}
                  >
                    {review.name}
                  </h4>
                  {Array.from({ length: review.rating }, (_, i) => (
                    <FaStar
                      key={i}
                      className={`inline-block mb-3 ${
                        i < review.rating ? "text-yellow-500" : "text-gray-500"
                      }`}
                    />
                  ))}
                  <p
                    className="font-thin text-sm"
                    style={{
                      fontSize: "20px",
                      fontWeight: "500px",
                    }}
                  >
                    {review.review}
                  </p>
                </div>
                <h6
                  className="text-gray-300 mr-7"
                  style={{ fontSize: "20px", fontWeight: "500px" }}
                >
                  June 15, 11:30 AM
                </h6>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-[#99999926] w-full py-10 mt-10 mx-auto text-center">
        <h1 className="text-xl md:text-2xl font-bold text-white text-shadow-glow">
          See more design by Kylie
        </h1>
      </div>

      <div className="bg-[#99999926] w-full md:w-[80%] py-10 mt-10 md:mt-20 mx-auto rounded-lg mb-10 md:mb-20">
        <h1 className="text-xl md:text-2xl font-bold text-white text-shadow-glow text-center my-auto">
          <Carousel
            items={[
              {
                name: "Mobile App",
                image: "/images/recents/image.png",
                type: "Mobile",
              },
              {
                name: "Desktop App",
                image: "/images/recents/image-1.png",
                type: "Dekstop",
              },
              {
                name: "Mobile App",
                image: "/images/recents/image-2.png",
                type: "Mobile",
              },
              {
                name: "Mobile App",
                image: "/images/recents/image.png",
                type: "Mobile",
              },
              {
                name: "Desktop App",
                image: "/images/recents/image-1.png",
                type: "Dekstop",
              },
              {
                name: "Mobile App",
                image: "/images/recents/image-2.png",
                type: "Mobile",
              },
              {
                name: "Mobile App",
                image: "/images/recents/image.png",
                type: "Mobile",
              },
              {
                name: "Desktop App",
                image: "/images/recents/image-1.png",
                type: "Dekstop",
              },
              {
                name: "Mobile App",
                image: "/images/recents/image-2.png",
                type: "Mobile",
              },
            ]}
          />
        </h1>
      </div>
    </div>
  );
};

export default GalleryDetail;
