import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularServices from "../PopularServices/PopularServices";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ElectroCare | Home</title>
      </Helmet>
      <Banner/>
      <PopularServices/>
    </div>
  );
};

export default Home;