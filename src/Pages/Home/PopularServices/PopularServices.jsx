import { useEffect, useState } from "react";
import PopularService from "../../../Components/PopularService/PopularService";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const PopularServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  console.log(services);
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold text-center my-8 bg-gradient-to-r from-indigo-500 p-2 rounded-full">
        Our Popular Services
      </h1>
      <h1 className="text-2xl font-bold text-center mb-6 p-2 rounded-full  bg-gradient-to-l from-indigo-500">
      What Kind of Repairs Can We Do?
      </h1>
      <div className="grid grid-cols-2 gap-8">
        {services?.slice(0, 6).map((service, idx) => (
          <PopularService key={idx} service={service}></PopularService>
        ))}
      </div>
      <div>
        <Link to='/services'>
        <Button
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
