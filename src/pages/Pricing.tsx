import bullet from "@/assets/icons/bullet.svg";
import { Link } from "react-router-dom";
const Pricing = () => {
  return (
    <section className="py-16">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 mb-2 text-center ">
          Our Simple Pricing
        </h2>
        <p className="text-sm font-medium text-gray-600 text-center">
          Choose the plan that best fits your skill-swapping journey.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center pt-10">
          {/* Simple Pricing Card */}
          <div className="w-[300px] border border-primary-200 bg-primary-50 shadow-lg rounded-lg p-8 flex flex-col justify-between h-full mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2 ">
                Our Simple Pricing
              </h2>
              <p className="text-sm font-medium text-gray-600  my-10">
                A small fee per successful swap.
              </p>
            </div>
            <div className="flex items-end gap-2 mb-4">
              <span className="text-4xl font-bold text-typo-900">5%</span>
              <span className="text-sm font-medium text-gray-600">
                of the Escrow amount
              </span>
            </div>
            <button className="flex justify-center items-center gap-2 text-white text-base bg-primary-500 text-center rounded-lg px-6 py-2 hover:bg-primary-400 transition-all duration-200 font-semibold">
              Get Started
            </button>
          </div>

          {/* Premium Membership Card */}
          <div className="w-[300px] bg-warning-50  shadow-lg border border-warning-200 rounded-lg p-8 flex flex-col justify-between h-full mx-auto">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Premium Membership
              </h2>

              <ul className="text-sm text-gray-700 space-y-4 mb-10">
                {[
                  "Zero Swap Fee",
                  "Boosted listings",
                  "Faster matching",
                  "Priority visibility",
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <img src={bullet} alt="•" className="mt-[2px] w-4 h-4" />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>

              <div className="flex items-end gap-2 mb-4">
                <span className="text-4xl font-bold text-typo-900">$50</span>
                <span className="text-sm font-medium text-gray-600">
                  /month
                </span>
              </div>
            </div>

            <button className="flex justify-center items-center gap-2 text-white text-base bg-warning-500 text-center rounded-lg px-6 py-2 hover:bg-warning-400 transition-all duration-200 font-semibold">
              Upgrade Now
            </button>
          </div>
        </div>
        <section className="bg-gray-50 py-20 mx-4 mt-20 rounded-md">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Secure Your Trades with Escrow
            </h2>
            <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
              For high-value trades, we recommend using our secure escrow
              service. A small fee applies for using this service, ensuring
              peace of mind for both parties.
            </p>
            <Link
              to="/escrow"
              className=" inline-block gap-2 text-white text-base bg-primary-500 text-center rounded-lg px-6 py-2 hover:bg-primary-400 transition-all duration-200 font-semibold"
            >
              Learn About Escrow
            </Link>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Pricing;
