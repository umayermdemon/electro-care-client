/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import { shortText } from "../../Utils/shortedText";
import { Link } from "react-router-dom";

const ShortedDescription = ({ description, maxLength = 100 }) => {
  const shortedDescription = shortText(description, maxLength);
  return (
    <div>
      <p>{shortedDescription}</p>
    </div>
  );
};

const Service = ({ service }) => {
  const {
    serviceName,
    imageUrl,
    price,
    description,
    providerImage,
    providerName,
    _id,
  } = service;
  return (
    <div>
      <Card
        data-aos="fade-up"
        data-aos-duration="2000"
        color="transparent"
        shadow={false}
        className="w-full max-w-[26rem] border-2 border-gray-300 px-4 h-80"
      >
        <CardHeader
          color="transparent"
          floated={false}
          shadow={false}
          className="mx-0 flex items-center gap-4 pt-2 pb-2"
        >
          <Avatar
            size="xxl"
            variant="circular"
            src={imageUrl}
            alt={serviceName}
          />
          <div className="flex w-full flex-col">
            <div className="flex items-center justify-between">
              <Typography variant="h5" color="blue-gray">
                {serviceName}
              </Typography>
            </div>
            <Typography color="red" className="font-semibold">
              Price: {price}{" "}
            </Typography>
          </div>
        </CardHeader>
        <CardBody className="mb-4 mt-2 p-0">
          <Typography className="text-justify ">
            <ShortedDescription
              description={description}
              maxLength={100}
            ></ShortedDescription>
          </Typography>
          <div className="flex flex-row items-center justify-end gap-4">
            <h2>{providerName}</h2>
            <div>
              <img src={providerImage} alt="" className="h-12 rounded-full" />
            </div>
          </div>
          <div className="mt-2">
            <Link to={`/viewDetails/${_id}`}>
              <Button className="bg-gradient-to-l from-indigo-500 " fullWidth>
                View Details
              </Button>
            </Link>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};
Service.propTypes = {
  service: PropTypes.object,
};

export default Service;
