import { useNavigate } from "react-router-dom";

const Card = ({ image, name, id }) => {
  const navigate = useNavigate();

  const handleCLick = () => {
    navigate("/gallery/" + id);
  };

  return (
    <div
      data-aos="fade-up"
      onClick={handleCLick}
      className="w-[260px] h-[282px] bg-white rounded-[20px] border border-[#d3d2e3] pb-4 cursor-pointer flex flex-col justify-between"
    >
      <img
        src={image}
        alt={name}
        width={282}
        height={282}
        className="w-full h-auto rounded-[15px] object-cover"
      />
      {/* Name */}
      <p
        className="mt-2 text-center text-lg font-bold"
        style={{ fontWeight: "700px" }}
      >
        {name}
      </p>
    </div>
  );
};

export default Card;
