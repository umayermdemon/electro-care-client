import { useContext, useEffect, useState } from "react";
import { GiConfirmed } from "react-icons/gi";
import { Helmet } from "react-helmet";
import { AuthContext } from "../../Provider/AuthProvider";
import { Card, Typography } from "@material-tailwind/react";

const ServiceToDo = () => {
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    fetch(`https://electro-care-server.vercel.app/booked?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, [user.email]);
  const TABLE_HEAD = ["Service Name", "Image", "Price", "Service Status"];

  return (
    <div className="min-h-[calc(100vh-326px)]">
      <Helmet>
        <title>ElectroCare | ServiceToDo</title>
      </Helmet>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 my-4">
        Service To Do
      </h1>
      {booked.length > 0 ? (
        <div>
          <Card className="h-full w-full overflow-y-scroll shadow-none">
            <table className="w-full min-w-max container mx-auto table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="lg"
                        color="black"
                        className="font-bold text-center leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {booked.map(
                  (
                    { serviceName, serviceImage, price, serviceStatus },
                    idx
                  ) => (
                    <tr key={idx} className="even:bg-blue-gray-50/50">
                      <td className="p-4 text-center">
                        <Typography
                          variant="md"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {serviceName}
                        </Typography>
                      </td>
                      <td className="p-4 flex justify-center">
                        <img
                          src={serviceImage}
                          alt=""
                          className="h-24 w-36 rounded-xl"
                        />
                      </td>
                      <td className="p-4 text-center">
                        <Typography
                          variant="md"
                          color="red"
                          className="font-bold"
                        >
                          {price}
                        </Typography>
                      </td>
                      <td className="p-4 text-center ">
                        <div className="flex flex-row items-center justify-center gap-4">
                          <select name="status" className="select select-warning ">
                            <option disabled selected>
                              {serviceStatus}
                            </option>
                            <option>Working</option>
                            <option>Completed</option>
                          </select>
                          <GiConfirmed className="text-2xl text-indigo-500" />
                        </div>
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </Card>
        </div>
      ) : (
        <div className="min-h-[calc(100vh-400px)] flex items-center justify-center">
          <p className="text-base md:text-xl lg:text-xl text-red-600 font-bold">
            Service unavailable. Please book a service.
          </p>
        </div>
      )}
    </div>
  );
};

export default ServiceToDo;
