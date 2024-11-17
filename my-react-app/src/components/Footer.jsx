import {
  FaFacebook,
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      id="about-us"
      className="bg-[rgba(0,0,0,0.48)] pt-20 pb-20 text-white  relative bottom-0 w-screen text-center mt-6"
    >
      <h4 className="text-4xl font-bold">Contact Us</h4>
      <br />
      <br />
      <p className="text-xl font-bold">Gigglecorps@company.com</p>
      <p className="text-xl font-normal">(123) 29389 9283 9389</p>
      <br />
      <br />
      <p className="text-xl font-normal">21 Surabaya, Indonesian, 33121</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-4  gap-[16px] mx-auto w-[20%] mt-5">
        <div className="w-[53px] h-[53px] relative">
          <div className="w-[53px] h-[53px] left-0 top-0 flex justify-center items-center bg-white/10 rounded-[5px] shadow backdrop-blur-[16.40px]">
            <FaFacebookSquare color="#B04E75F2" size={"30"} />
          </div>
        </div>
        <div className="w-[53px] h-[53px] relative">
          <div className="w-[53px] h-[53px] left-0 top-0 flex justify-center items-center bg-white/10 rounded-[5px] shadow backdrop-blur-[16.40px]">
            <FaTwitterSquare color="#B04E75F2" size={"30"} />
          </div>
        </div>
        <div className="w-[53px] h-[53px] relative">
          <div className="w-[53px] h-[53px] left-0 top-0 flex justify-center items-center bg-white/10 rounded-[5px] shadow backdrop-blur-[16.40px]">
            <FaInstagramSquare color="#B04E75F2" size={"30"} />
          </div>
        </div>
        <div className="w-[53px] h-[53px] relative">
          <div className="w-[53px] h-[53px] left-0 top-0 flex justify-center items-center bg-white/10 rounded-[5px] shadow backdrop-blur-[16.40px]">
            <FaLinkedin color="#B04E75F2" size={"30"} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
