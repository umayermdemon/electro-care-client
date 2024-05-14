import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { useLoaderData } from "react-router-dom";

const ViewDetails = () => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);
  const service = useLoaderData();
  const {
    imageUrl,
    price,
    providerImage,
    providerName,
    serviceArea,
    serviceName,
    description,
  } = service;
  console.log(service);

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
            <Button
              onClick={handleOpen}
              variant="gradient"
              className="bg-gradient-to-r from-indigo-500"
            >
              Book Now
            </Button>
          </div>
          <form>
            <Dialog open={open} handler={handleOpen}>
              <DialogHeader>Its a simple dialog.</DialogHeader>
              <DialogBody>
                The key to more success is to have a lot of pillows. Put it this
                way, it took me twenty five years to get these plants, twenty
                five years of blood sweat and tears, and I&apos;m never giving
                up, I&apos;m just getting started. I&apos;m up to something. Fan
                luv.
              </DialogBody>
              <DialogFooter>
                <Button
                  variant="text"
                  color="red"
                  onClick={handleOpen}
                  className="mr-1"
                >
                  <span>Cancel</span>
                </Button>
                <Button variant="gradient" type="submit" color="green" onClick={handleOpen}>
                  <span>Confirm</span>
                </Button>
              </DialogFooter>
            </Dialog>
          </form>
        </CardBody>
      </Card>
    </div>
  );
};

export default ViewDetails;
