import { Button, Input } from "@material-tailwind/react";

const BookedForm = () => {
  const handleModal = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceId = form.serviceId.value;
    const serviceName = form.serviceName.value;
    const serviceImage = form.serviceImage.value;
    const price = form.price.value;
    const providerName = form.providerName.value;
    const providerEmail = form.providerEmail.value;
    const serviceTakingDate = form.serviceTakingDate.value;
    const specialInstruction = form.specialInstruction.value;
    const bookedService = {
      serviceId,
      serviceName,
      serviceImage,
      price,
      providerName,
      providerEmail,
      serviceTakingDate,
      specialInstruction,
    };
    console.log(bookedService);
  };
  return (
    <div className="bg-white container mx-auto">
      <h1 className="text-center text-4xl font-bold text-blue-900 my-4">
        Book Your Service
      </h1>
      <form
        onSubmit={handleModal}
        className="border border-blue-900 space-y-8 rounded-xl h-[513px] p-8 pt-16 my-4"
      >
        <div className="flex flex-row gap-2 ">
          <Input name="serviceId" label="Service Id" size="lg" />
          <Input name="serviceName" label="Service Name" size="lg" />
        </div>
        <div className="flex flex-row gap-2 ">
          <Input name="serviceImage" label="Service Image" size="lg" />
          <Input name="price" label="Price" size="lg" />
        </div>
        <div className="flex flex-row gap-2 ">
          <Input name="providerName" label="Provider Name" size="lg" />
          <Input name="providerEmail" label="Provider Email" size="lg" />
        </div>
        <div className="flex flex-row gap-2 ">
          <Input
            name="serviceTakingDate"
            type="date"
            label="Service Taking Date"
            size="lg"
          />
          <Input
            name="specialInstruction"
            label="Special instruction"
            size="lg"
          />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" className="bg-gradient-to-r from-indigo-500 ">
            Booked
          </Button>
        </div>
      </form>
    </div>
  );
};

export default BookedForm;
