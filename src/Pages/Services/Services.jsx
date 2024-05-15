import { useLoaderData } from "react-router-dom";
import Service from "../../Components/Service/Service";
import { Helmet } from "react-helmet";

const Services = () => {
  const services = useLoaderData();

  return (
    <div className="flex flex-col items-center justify-center">
      <Helmet>
        <title>ElectroCare | Services</title>
      </Helmet>
      <h1 className="text-3xl font-bold text-center my-8 bg-gradient-to-r from-indigo-500 p-2 rounded-full">
        All Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-4 gap-8">
        {services.map((service, idx) => (
          <Service key={idx} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
