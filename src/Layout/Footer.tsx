import navLogo from "@/assets/nav-logo.svg";
import CommonWrapper from "@/common/CommonWrapper";
import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="py-6 mt-10 border-t border-gray-200">
      <CommonWrapper>
        <div className="px-4 flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center">
          {/* Left side */}
          <div className="flex flex-col items-center sm:flex-row sm:items-center gap-2 text-sm text-gray-600 text-center sm:text-left">
            <div className="flex items-center gap-2">
              <img src={navLogo} alt="SwapSpot Logo" className="w-7 h-7" />
              <span className="text-primary-900 font-semibold text-[24px]">
                SwapSpot
              </span>
            </div>
            <span className="text-sm">© SwapSpot International Ltd. 2025</span>
          </div>

          {/* Right side */}
          <div className="flex justify-center sm:justify-end gap-4 text-sm text-gray-600">
            <Link to="/terms" className="hover:text-primary-500">
              Terms of Service
            </Link>
            <Link to="/privacy" className="hover:text-primary-500">
              Privacy Policy
            </Link>
          </div>
        </div>
      </CommonWrapper>
    </footer>
  );
};

export default Footer;
