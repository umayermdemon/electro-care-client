import { Button, Input, Textarea } from "@material-tailwind/react";
import { Helmet } from "react-helmet";
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateForm = () => {
  const service = useLoaderData();
  const { serviceName,serviceArea,imageUrl,price,description,_id } =
    service;
  const navigate=useNavigate()
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const serviceName = form.serviceName.value;
    const serviceArea = form.serviceArea.value;
    const description = form.description.value;
    const serviceImage = form.imageUrl.value;
    const price = form.price.value;
    const bookedService = {
      serviceName,
      serviceImage,
      price,
      serviceArea,
      description
    };
    console.log(bookedService);

    fetch(`https://electro-care-server.vercel.app/services/${_id}`,{
      method:'PATCH',
      headers:{
        'content-type':'application/json'
      },
      body: JSON.stringify(bookedService)

    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data)
      if(data.modifiedCount>0){
        Swal.fire({
          title: 'Success!',
          text: 'Service Successfully Updated ',
          icon: 'success',
        })

      }
      navigate('/manageServices')

    })

  };
  return (
    <div className="bg-white md:container lg:container mx-1 md:mx-auto lg:mx-auto">
      <Helmet>
        <title>ElectroCare | Update Service</title>
      </Helmet>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 my-4">
        Update Your Service
      </h1>
      <form
        onSubmit={handleUpdate}
        className="border border-blue-900 space-y-4 lg:space-y-8 rounded-xl lg:h-[513px] p-4 lg:p-8 lg:pt-16 my-4"
      >
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-8">
          <Input name="serviceName" label="Service Name" size="lg" defaultValue={serviceName} />
          <Input name="serviceArea" label="Service Area" size="lg" defaultValue={serviceArea} />
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-8 ">
          <Input name="imageUrl" label="Image Url" size="lg" defaultValue={imageUrl} />
          <Input name="price" label="Price" size="lg"  defaultValue={price}/>
        </div>
        <div>
          <Textarea
            name="description"
            label="Description"
            size="lg"
            className="h-48"
           
            defaultValue={description}
          />
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" className="bg-gradient-to-r from-indigo-500 ">
            {" "}
            Update Service{" "}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UpdateForm;
