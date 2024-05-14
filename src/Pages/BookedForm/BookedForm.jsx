import { Button, Input } from "@material-tailwind/react";
import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";


const BookedForm = () => {
  const {user}=useContext(AuthContext);
  console.log(user.displayName)
  const service=useLoaderData()
  const {
    _id,
    imageUrl,
    price,
    providerEmail,
    providerName,
    serviceName,
  } = service;
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
    <div className="bg-white md:container lg:container mx-1 md:mx-auto lg:mx-auto">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 my-4">
        Book Your Service
      </h1>
      <form
        onSubmit={handleModal}
        className="border border-blue-900 space-y-4 lg:space-y-8 rounded-xl lg:h-[513px] p-1 md:p-8 lg:p-8 pt-8 lg:pt-16 my-4"
      >
        <div className="flex flex-row gap-2 ">
          <Input name="serviceId" label="Service Id" size="lg"     defaultValue={_id} readOnly/>
          <Input name="serviceName" label="Service Name" size="lg" defaultValue={serviceName} readOnly/>
        </div>
        <div className="flex flex-row gap-2 ">
          <Input name="serviceImage" label="Service Image" size="lg" defaultValue={imageUrl} readOnly/>
          <Input name="price" label="Price" size="lg"  defaultValue={price} readOnly/>
        </div>
        <div className="flex flex-row gap-2 ">
          <Input name="providerName" label="Provider Name" size="lg"   defaultValue={providerName} readOnly/>
          <Input name="providerEmail" label="Provider Email" size="lg" defaultValue={providerEmail}  readOnly/>
        </div>
        <div className="flex flex-row gap-2 ">
          <Input name="currentUserName" label="Current User Name" size="lg"   defaultValue={user.displayName} readOnly/>
          <Input name="currentUserEmail" label="Current User Email" size="lg" defaultValue={user.email}  readOnly/>
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
