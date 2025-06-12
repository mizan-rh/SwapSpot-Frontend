import searchIcon from "@/assets/icons/search.svg";
import navLogo from "@/assets/nav-logo.svg";
import CommonWrapper from "@/common/CommonWrapper";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="sticky top-0 w-full bg-white z-50 shadow-lg">
      <CommonWrapper>
        <div className="w-full py-4 flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={navLogo} alt="Logo" className="h-8" />
            <span className="text-primary-900 font-semibold text-[28px] md:text-[34px]">
              SwapSpot
            </span>
          </Link>

          {/* Search Box - Only visible on lg and up */}
          <div className="hidden lg:block flex-1 max-w-md ml-4 relative">
            <img
              src={searchIcon}
              alt="Search"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          {/* Desktop Nav + Buttons - Only visible on lg and up */}
          <div className="hidden lg:flex gap-x-3 items-center">
            {/* Nav Links */}
            <div className="flex gap-4 text-black font-normal text-base">
              <Link
                to={"/how-it-works"}
                className="px-3 py-1 rounded-md hover:text-primary-500 transition-all duration-200"
              >
                How It Works?
              </Link>
              <Link
                to={"/pricing"}
                className="px-3 py-1 rounded-md hover:text-primary-500 transition-all duration-200"
              >
                Pricing
              </Link>
              <Link
                to={"/security"}
                className="px-3 py-1 rounded-md hover:text-primary-500 transition-all duration-200"
              >
                Security
              </Link>
            </div>

            {/* Buttons */}
            <Link
              to="#"
              className="flex items-center gap-2 text-primary-500 text-base border-2 border-primary-500 rounded-lg px-4 py-2 hover:bg-primary-50 transition-all duration-200"
            >
              Login
            </Link>
            <Link
              to="#"
              className="flex items-center gap-2 text-white text-base bg-primary-500 rounded-lg px-4 py-2 hover:bg-primary-400 transition-all duration-200"
            >
              Join/Register
            </Link>
          </div>

          {/* Hamburger - shown below lg */}
          <div className="lg:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? (
                <X color="black" size={28} />
              ) : (
                <Menu color="black" size={28} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Menu (for < lg) */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out px-4 ${
            menuOpen
              ? "max-h-96 opacity-100 py-4 shadow-lg bg-white rounded-xl"
              : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="flex flex-col-reverse gap-4 text-black font-normal text-base">
            {/* Nav Links */}
            <div className="flex flex-col gap-3">
              <Link
                to={"/how-it-works"}
                className="hover:text-primary-500 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                How It Works?
              </Link>
              <Link
                to={"/pricing"}
                className="hover:text-primary-500 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Pricing
              </Link>
              <Link
                to={"/security"}
                className="hover:text-primary-500 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                Security
              </Link>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-3 self-start w-auto">
              <Link
                to="#"
                className="flex items-center justify-center gap-2 border-2 border-primary-500 text-primary-500 text-base rounded-lg px-6 py-2 hover:bg-primary-50 transition-all duration-200 font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </Link>
              <Link
                to="#"
                className="flex items-center gap-2 text-white text-base bg-primary-500 rounded-lg px-6 py-2 hover:bg-primary-400 transition-all duration-200 font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Join/Register
              </Link>
            </div>
          </div>
        </div>
      </CommonWrapper>
    </nav>
  );
};

export default Navbar;
