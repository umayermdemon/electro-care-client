import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { Link, useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const service = useLoaderData();
  const {
    _id,
    imageUrl,
    price,
    providerImage,
    providerName,
    serviceArea,
    serviceName,
    description,
  } = service;
  // console.log(service);

  return (
    <div>
      <Card className=" max-w-full lg:h-[577px] mx-2 lg:mx-6 my-3 border border-red-900 lg:flex-row">
        <CardHeader
          shadow={false}
          floated={false}
          className="  m-0  lg:w-3/5 shrink-0 rounded-r-none"
        >
          <img
            src={imageUrl}
            alt={serviceName}
            className="h-full w-full object-cover"
          />
        </CardHeader>
        <CardBody className="p-2">
          <Typography variant="h4" color="blue-gray" className="mb-2">
            {serviceName}
          </Typography>
          <Typography color="gray" className="mb-2 text-justify font-normal">
            {description}
          </Typography>
          <Typography variant="h6" color="red">
            Price: {price}
          </Typography>
          <div>
            <Typography variant="h6" color="black" className="mb-2">
              Provider Information:
            </Typography>
            <div className="space-y-1 text-left">
              <img src={providerImage} alt="" className="h-12 rounded-full" />
              <Typography variant="h6" color="gray">
                <span className="text-black">Name:</span> {providerName}
              </Typography>
              <Typography variant="h6" color="gray">
                <span className="text-black">Service Area:</span> {serviceArea}
              </Typography>
            </div>
          </div>
          <div className="flex items-center justify-center mt-8">
            <Link to={`/bookedForms/${_id}`}>
              <Button
                variant="gradient"
                className="bg-gradient-to-r from-indigo-500"
              >
                Book Now
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewDetails;
