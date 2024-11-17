import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaBell } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); // State to track client-side rendering

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setIsClient(true); // Set to true once the component is rendered on the client
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to apply active link style
  const linkStyle = (path) =>
    isClient && location.pathname.includes(path)
      ? "text-white font-bold"
      : "text-white";

  return (
    <nav
      style={{
        backgroundColor: "#99999942",
      }}
      className="h-[70px] w-screen bg-gradient-to-b from-white/20 to-white/20 font-sans text-white flex justify-between items-center px-10 relative left-0"
    >
      {/* Left Links (Hidden on mobile) */}
      <div className="hidden lg:flex gap-x-5 items-center flex-grow">
        <Link to="/" className={linkStyle("/")}>
          Home
        </Link>
        <Link to="/gallery" className={linkStyle("/gallery")}>
          Gallery
        </Link>
        <Link to="/jobs" className={linkStyle("/jobs")}>
          Jobs
        </Link>
        <Link to="/#about-us" className={linkStyle("/#about-us")}>
          About Us
        </Link>
      </div>

      {/* Center Logo */}
      <div className="text-white font-bold font-['Inter'] text-center flex-grow lg:flex-none -translate-x-20 md:text-lg sm:text-lg lg:text-[36px] text-shadow-glow">
        GIGGLE’S
      </div>

      {/* Right Icons (Hidden on mobile) */}
      <div className="hidden lg:flex items-center gap-3 flex-grow justify-end">
        <FaBell size={"30px"} />
        <img
          alt="profile"
          width={50}
          height={50}
          src="/profile.png"
          className="rounded-full"
        />
      </div>

      {/* Hamburger Menu (Visible only on mobile) */}
      <div className="lg:hidden absolute right-4 top-4" onClick={toggleMenu}>
        <div
          className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ${
            isMenuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ${
            isMenuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-6 h-1 bg-white mb-1 transition-all duration-300 ${
            isMenuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </div>

      {/* Mobile Menu (Visible only on mobile) */}
      <div
        className={`lg:hidden absolute left-0 top-[90px] w-full h-200 px bg-gradient-to-b from-white/20 to-white/20 p-4 transition-all duration-300 ${
          isMenuOpen
            ? "max-h-[400px] opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="flex flex-col gap-4 text-center">
          <Link to="/" className={linkStyle("/")}>
            Home
          </Link>
          <Link to="/gallery" className={linkStyle("/gallery")}>
            Gallery
          </Link>
          <Link to="/jobs" className={linkStyle("/jobs")}>
            Jobs
          </Link>
          <Link to="/about" className={linkStyle("/about")}>
            About Us
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
