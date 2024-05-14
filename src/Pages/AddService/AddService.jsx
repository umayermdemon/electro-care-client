import { Button, Input, Textarea } from "@material-tailwind/react";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";

const AddService = () => {

  const {user}=useContext(AuthContext);
  

  const handleAddService=e=>{
    e.preventDefault();
    const form=e.target;
    const serviceName=form.serviceName.value;
    const serviceArea=form.serviceArea.value;
    const imageUrl=form.imageUrl.value;
    const price=form.price.value;
    const description=form.description.value;
    const providerEmail= user.email
    const providerImage= user?.photoURL
    const providerName= user.displayName
    const service={serviceName,serviceArea,imageUrl,price,description,providerEmail,providerImage,providerName}
    console.log(service)

    fetch("http://localhost:5000/services",{
      method:'POST',
      headers:{
        'content-type':'application/json'
      },
      body:JSON.stringify(service)
    })
    .then(res=>res.json())
    .then(data=>{
      if(data.insertedId){
        Swal.fire({
          title: 'Success!',
          text: 'Service Successfully Added ',
          icon: 'success',
        })
      }
    })


    
    form.reset()
  }

  return (
    <div className="bg-white md:container lg:container mx-2 md:mx-auto lg:mx-auto ">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 my-4">Add Your Service</h1>
      <form onSubmit={handleAddService} className="border border-blue-900 space-y-4 lg:space-y-8 rounded-xl lg:h-[513px] p-4 lg:p-8 lg:pt-16 my-4">
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-8">
          <Input name="serviceName"  label="Service Name" size="lg"/>
          <Input name="serviceArea"  label="Service Area" size="lg"/>
        </div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-4 md:gap-8 lg:gap-8 ">
          <Input name="imageUrl"  label="Image Url" size="lg"/>
          <Input name="price"  label="Price" size="lg"/>
        </div>
        <div >
          <Textarea name="description" label="Description"  size="lg" className="h-48"/>
        </div>
        <div className="flex items-center justify-center">
          <Button type="submit" className="bg-gradient-to-r from-indigo-500 "> Add Service </Button>
        </div>
      </form>
    </div>
  );
};

export default AddService;
