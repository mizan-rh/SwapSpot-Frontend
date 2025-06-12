import profile from "@/assets/avatar.jpg";
import location from "@/assets/icons/map.svg";
import message from "@/assets/icons/message.svg";
import rightIcon from "@/assets/icons/profile-status.svg";
import rateIcon from "@/assets/icons/star.svg";

const MatchesForYou = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold p-4">Matches For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {/* Card Start */}
        <div className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white flex flex-col justify-between gap-4">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            {/* Left - Profile Section */}
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <img
                  src={rightIcon}
                  alt="Verified"
                  className="absolute top-0 right-0 w-6 h-6"
                />
                <div className="absolute -bottom-2 bg-warning-100 left-1/2 -translate-x-1/2  px-1 w-full rounded-full flex items-center gap-1 text-sm">
                  <img src={rateIcon} alt="Star" className="w-4 h-4" />
                  <span className="text-xs font-semibold">4.9(5)</span>
                </div>
              </div>

              {/* Name & Location */}
              <div>
                <h3 className="font-semibold text-base">John Doe</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <img src={location} alt="Location" className="w-4 h-4 mr-1" />
                  New York, USA
                </div>
              </div>
            </div>

            {/* Right - Availability */}
            <div>
              <span className="text-green-600 text-sm font-medium">
                Available
              </span>
            </div>
          </div>

          {/* Offer Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>I offer</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Graphic Design
            </button>
          </div>

          {/* In Exchange Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>In exchange for</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Web Development
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center gap-2 pt-2">
            <button className="px-4 py-2 border cursor-pointer border-primary-500 text-primary-500 rounded-lg text-sm">
              View Profile
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-black rounded-lg cursor-pointer text-sm">
                <img src={message} alt="" />
              </button>
              <button className="px-4 py-2 cursor-pointer bg-primary-500 text-white rounded-lg text-sm">
                Swap
              </button>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white flex flex-col justify-between gap-4">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            {/* Left - Profile Section */}
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <img
                  src={rightIcon}
                  alt="Verified"
                  className="absolute top-0 right-0 w-6 h-6"
                />
                <div className="absolute -bottom-2 bg-warning-100 left-1/2 -translate-x-1/2  px-1 w-full rounded-full flex items-center gap-1 text-sm">
                  <img src={rateIcon} alt="Star" className="w-4 h-4" />
                  <span className="text-xs font-semibold">4.9(5)</span>
                </div>
              </div>

              {/* Name & Location */}
              <div>
                <h3 className="font-semibold text-base">John Doe</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <img src={location} alt="Location" className="w-4 h-4 mr-1" />
                  New York, USA
                </div>
              </div>
            </div>

            {/* Right - Availability */}
            <div>
              <span className="text-green-600 text-sm font-medium">
                Available
              </span>
            </div>
          </div>

          {/* Offer Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>I offer</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Graphic Design
            </button>
          </div>

          {/* In Exchange Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>In exchange for</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Web Development
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center gap-2 pt-2">
            <button className="px-4 py-2 border cursor-pointer border-primary-500 text-primary-500 rounded-lg text-sm">
              View Profile
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-black rounded-lg cursor-pointer text-sm">
                <img src={message} alt="" />
              </button>
              <button className="px-4 py-2 cursor-pointer bg-primary-500 text-white rounded-lg text-sm">
                Swap
              </button>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white flex flex-col justify-between gap-4">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            {/* Left - Profile Section */}
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <img
                  src={rightIcon}
                  alt="Verified"
                  className="absolute top-0 right-0 w-6 h-6"
                />
                <div className="absolute -bottom-2 bg-warning-100 left-1/2 -translate-x-1/2  px-1 w-full rounded-full flex items-center gap-1 text-sm">
                  <img src={rateIcon} alt="Star" className="w-4 h-4" />
                  <span className="text-xs font-semibold">4.9(5)</span>
                </div>
              </div>

              {/* Name & Location */}
              <div>
                <h3 className="font-semibold text-base">John Doe</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <img src={location} alt="Location" className="w-4 h-4 mr-1" />
                  New York, USA
                </div>
              </div>
            </div>

            {/* Right - Availability */}
            <div>
              <span className="text-green-600 text-sm font-medium">
                Available
              </span>
            </div>
          </div>

          {/* Offer Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>I offer</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Graphic Design
            </button>
          </div>

          {/* In Exchange Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>In exchange for</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Web Development
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center gap-2 pt-2">
            <button className="px-4 py-2 border cursor-pointer border-primary-500 text-primary-500 rounded-lg text-sm">
              View Profile
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-black rounded-lg cursor-pointer text-sm">
                <img src={message} alt="" />
              </button>
              <button className="px-4 py-2 cursor-pointer bg-primary-500 text-white rounded-lg text-sm">
                Swap
              </button>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white flex flex-col justify-between gap-4">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            {/* Left - Profile Section */}
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <img
                  src={rightIcon}
                  alt="Verified"
                  className="absolute top-0 right-0 w-6 h-6"
                />
                <div className="absolute -bottom-2 bg-warning-100 left-1/2 -translate-x-1/2  px-1 w-full rounded-full flex items-center gap-1 text-sm">
                  <img src={rateIcon} alt="Star" className="w-4 h-4" />
                  <span className="text-xs font-semibold">4.9(5)</span>
                </div>
              </div>

              {/* Name & Location */}
              <div>
                <h3 className="font-semibold text-base">John Doe</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <img src={location} alt="Location" className="w-4 h-4 mr-1" />
                  New York, USA
                </div>
              </div>
            </div>

            {/* Right - Availability */}
            <div>
              <span className="text-green-600 text-sm font-medium">
                Available
              </span>
            </div>
          </div>

          {/* Offer Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>I offer</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Graphic Design
            </button>
          </div>

          {/* In Exchange Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>In exchange for</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Web Development
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center gap-2 pt-2">
            <button className="px-4 py-2 border cursor-pointer border-primary-500 text-primary-500 rounded-lg text-sm">
              View Profile
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-black rounded-lg cursor-pointer text-sm">
                <img src={message} alt="" />
              </button>
              <button className="px-4 py-2 cursor-pointer bg-primary-500 text-white rounded-lg text-sm">
                Swap
              </button>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white flex flex-col justify-between gap-4">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            {/* Left - Profile Section */}
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <img
                  src={rightIcon}
                  alt="Verified"
                  className="absolute top-0 right-0 w-6 h-6"
                />
                <div className="absolute -bottom-2 bg-warning-100 left-1/2 -translate-x-1/2  px-1 w-full rounded-full flex items-center gap-1 text-sm">
                  <img src={rateIcon} alt="Star" className="w-4 h-4" />
                  <span className="text-xs font-semibold">4.9(5)</span>
                </div>
              </div>

              {/* Name & Location */}
              <div>
                <h3 className="font-semibold text-base">John Doe</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <img src={location} alt="Location" className="w-4 h-4 mr-1" />
                  New York, USA
                </div>
              </div>
            </div>

            {/* Right - Availability */}
            <div>
              <span className="text-green-600 text-sm font-medium">
                Available
              </span>
            </div>
          </div>

          {/* Offer Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>I offer</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Graphic Design
            </button>
          </div>

          {/* In Exchange Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>In exchange for</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Web Development
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center gap-2 pt-2">
            <button className="px-4 py-2 border cursor-pointer border-primary-500 text-primary-500 rounded-lg text-sm">
              View Profile
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-black rounded-lg cursor-pointer text-sm">
                <img src={message} alt="" />
              </button>
              <button className="px-4 py-2 cursor-pointer bg-primary-500 text-white rounded-lg text-sm">
                Swap
              </button>
            </div>
          </div>
        </div>
        <div className="border border-gray-200 rounded-2xl p-4 shadow-sm bg-white flex flex-col justify-between gap-4">
          {/* Top Section */}
          <div className="flex justify-between items-start">
            {/* Left - Profile Section */}
            <div className="flex items-start gap-4">
              <div className="relative w-16 h-16">
                <img
                  src={profile}
                  alt="Profile"
                  className="w-16 h-16 rounded-full object-cover"
                />
                <img
                  src={rightIcon}
                  alt="Verified"
                  className="absolute top-0 right-0 w-6 h-6"
                />
                <div className="absolute -bottom-2 bg-warning-100 left-1/2 -translate-x-1/2  px-1 w-full rounded-full flex items-center gap-1 text-sm">
                  <img src={rateIcon} alt="Star" className="w-4 h-4" />
                  <span className="text-xs font-semibold">4.9(5)</span>
                </div>
              </div>

              {/* Name & Location */}
              <div>
                <h3 className="font-semibold text-base">John Doe</h3>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  <img src={location} alt="Location" className="w-4 h-4 mr-1" />
                  New York, USA
                </div>
              </div>
            </div>

            {/* Right - Availability */}
            <div>
              <span className="text-green-600 text-sm font-medium">
                Available
              </span>
            </div>
          </div>

          {/* Offer Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>I offer</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Graphic Design
            </button>
          </div>

          {/* In Exchange Section */}
          <div className="flex justify-between items-center text-sm font-medium">
            <span>In exchange for</span>
            <button className="px-3 py-1 text-primary-500 border border-primary-500 rounded-full text-xs">
              Web Development
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between items-center gap-2 pt-2">
            <button className="px-4 py-2 border cursor-pointer border-primary-500 text-primary-500 rounded-lg text-sm">
              View Profile
            </button>
            <div className="flex gap-2">
              <button className="px-4 py-2 text-black rounded-lg cursor-pointer text-sm">
                <img src={message} alt="" />
              </button>
              <button className="px-4 py-2 cursor-pointer bg-primary-500 text-white rounded-lg text-sm">
                Swap
              </button>
            </div>
          </div>
        </div>
        {/* Repeat 5 more cards or map dynamically */}
      </div>
    </div>
  );
};

export default MatchesForYou;
