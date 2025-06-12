import Hero from "@/components/HomeComponents/Hero";
import MatchesForYou from "@/components/HomeComponents/MatchesForYou";
import CommonWrapper from "../common/CommonWrapper";

const Home = () => {
  return (
    <CommonWrapper>
      <Hero />
      <MatchesForYou />
    </CommonWrapper>
  );
};

export default Home;
