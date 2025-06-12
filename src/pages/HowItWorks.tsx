import CommonWrapper from "@/common/CommonWrapper";
import { Link } from "react-router-dom";

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <CommonWrapper>
        <div className="px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Left Side Content */}
            <div className="space-y-12">
              {/* Header */}
              <div className="space-y-4">
                <h2 className="text-3xl sm:text-4xl font-bold">
                  Secure How SwapSpot Works Your Swaps with Escrow
                </h2>
                <p className="text-lg text-gray-600 font-medium">
                  Connecting skills, creating value, one swap at a time.
                </p>
              </div>

              {/* Step 1 */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Propose Your Trade
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  Found someone with a skill you need? Send them a swap
                  proposal. Clearly define what skill you will offer in exchange
                  for theirs, the scope of work, timeline, and any other
                  important details. You can also use the messaging system to
                  discuss before proposing.
                </p>
              </div>

              {/* Step 2 */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Agree and Get Started
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  The other user reviews your proposal. They can accept,
                  decline, or suggest modifications. Once both parties agree on
                  the terms, the swap is initiated. For added security, consider
                  using the Escrow service for valuable trades.
                </p>
              </div>

              {/* Step 3 */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Perform the Service
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  Both parties now perform the skill services as agreed upon in
                  the swap proposal. Communicate through the platform's
                  messaging system to stay updated on progress.
                </p>
              </div>

              {/* Step 4 */}
              <div className="space-y-3">
                <h3 className="text-2xl sm:text-3xl font-bold">
                  Confirm & Review
                </h3>
                <p className="text-gray-700 text-base sm:text-lg">
                  Once both parties are satisfied that the services are
                  completed according to the agreement, they confirm completion
                  on the platform. You can then leave a review and rating for
                  the other user based on your experience. A small swap fee is
                  processed upon successful completion.
                </p>
              </div>
            </div>

            {/* Right Side (Empty for now) */}
            <div />
          </div>
          <section className="bg-gray-50 max-w-3xl mx-auto py-20 mt-20 rounded-md">
            <div className="mx-auto px-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Secure Your Trades with Escrow
              </h2>

              <Link
                to="/escrow"
                className=" inline-block gap-2 text-white text-base bg-primary-500 text-center rounded-lg px-6 py-2 hover:bg-primary-400 transition-all duration-200 font-semibold"
              >
                Learn About Escrow
              </Link>
            </div>
          </section>
        </div>
      </CommonWrapper>
    </section>
  );
};

export default HowItWorks;
