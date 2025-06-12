import heroImage from "@/assets/hero.png";
import searchIcon from "@/assets/icons/search.svg";

const Hero = () => {
    return (
        <section className="w-full px-4 py-12 sm:py-16 lg:py-24 flex flex-col-reverse lg:flex-row items-center gap-12 overflow-hidden">
        {/* Left Side */}
        <div className="w-full lg:w-1/2 flex flex-col gap-6">
          <h1 className="font-monrope font-semibold text-[32px] sm:text-[40px] md:text-[48px] leading-tight text-black">
            Your Amazing Title Here
          </h1>

          <p className="font-monrope font-medium text-[14px] sm:text-[16px] text-gray-700 max-w-xl">
            This is a paragraph explaining the key benefits or features. It
            should be clear and engaging to keep users interested.
          </p>

          {/* Search Box */}
          <div className="relative w-full max-w-sm lg:max-w-md ">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-3 pr-12 pl-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 font-monrope text-base"
            />
            <img
              src={searchIcon}
              alt="Search"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 pointer-events-none"
            />
          </div>

          {/* Search Tags */}
          <div className="flex flex-wrap gap-3">
            {["Graphic Design", "Web Development", "Graphic Design"].map(
              (tag) => (
                <button
                  key={tag}
                  className="border border-primary-500 text-primary-500 rounded-lg px-4 py-2 font-monrope font-medium text-sm hover:bg-primary-50 transition"
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full lg:w-1/2 max-w-xl">
          <img
            src={heroImage}
            alt="Hero"
            className="w-full h-auto object-contain"
            loading="lazy"
          />
        </div>
      </section>
    );
};

export default Hero;