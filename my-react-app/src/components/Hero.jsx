const Hero = ({
  title = "Gallery",
  subtitle = "Get inspired by a rich and diverse collection of art. Explore our gallery now.",
}) => {
  return (
    <div style={{}} className="pt-20 flex flex-col justify-center ">
      <div className="text-center text-white text-[64px] font-bold font-['Inter']">
        {title}
      </div>
      <div className="flex items-center justify-center text-center text-white font-['Inter'] w-full">
        <div className="font-normal text-center w-[675px] max-w-[675px]">
          {subtitle}
        </div>
      </div>
    </div>
  );
};

export default Hero;
