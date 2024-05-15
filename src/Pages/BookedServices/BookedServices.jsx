import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { Button, Card, Typography } from "@material-tailwind/react";
import { Helmet } from "react-helmet";

const BookedServices = () => {
  const { user } = useContext(AuthContext);
  const [booked, setBooked] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/booked?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setBooked(data));
  }, [user.email]);
  const TABLE_HEAD = ["Service Name", "Image", "Price", "Service Status"];

  return (
    <div className="min-h-[calc(100vh-326px)]">
      <Helmet>
        <title>ElectroCare | Booked Services</title>
      </Helmet>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 my-4">
        Booked Services
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
                        <Button
                          as="a"
                          href="#"
                          variant="md"
                          color="yellow"
                          className="font-bold"
                        >
                          {serviceStatus}
                        </Button>
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
          <p className="text-base md:text-xl lg:text-xl text-red-600 font-bold">Service unavailable. Please book a service.</p>
        </div>
      )}
    </div>
  );
};

export default BookedServices;
