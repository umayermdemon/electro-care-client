import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import PopularServices from "../PopularServices/PopularServices";
import Preview from "../Preview/Preview";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>ElectroCare | Home</title>
      </Helmet>
      <Banner/>
      <PopularServices/>
      <Preview/>
    </div>
  );
};

export default Home;