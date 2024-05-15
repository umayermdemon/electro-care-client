import { useEffect, useState } from "react";
import PopularService from "../../../Components/PopularService/PopularService";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://electro-care-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center my-4 lg:my-8 bg-gradient-to-r from-indigo-500 p-2 rounded-full">
        Our Popular Services
      </h1>
      <h1 className="text-base md:text-xl lg:text-2xl font-bold text-center mb-6 p-2 rounded-full  bg-gradient-to-l from-indigo-500">
        What Kind of Repairs Can We Do?
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mx-2">
        {services?.slice(0, 6).map((service, idx) => (
          <PopularService key={idx} service={service}></PopularService>
        ))}
      </div>
      <div>
        <Link to="/services">
          <Button
            data-aos="fade-up"
            data-aos-duration="3000"
            size="lg"
            className="my-4  text-white rounded-lg  bg-gradient-to-r from-indigo-500 flex mx-auto"
          >
            Show All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PopularServices;
