import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import ManageService from "../../Components/ManageService/ManageService";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const ManageServices = () => {
  const { user } = useContext(AuthContext);
  const [manageServices, setManageServices] = useState([]);
  const handleDelete = (id) => {
    console.log(id)
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://electro-care-server.vercel.app/services/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data)
            if(data.deletedCount>0){
              Swal.fire({
                title: "Deleted!",
                text: "Your service has been deleted.",
                icon: "success",
              });

              const remaining= manageServices.filter(item=>item._id !== id)
              setManageServices(remaining)

            }
          });
        
      }
    });

    //
  };
  useEffect(() => {
    fetch(`https://electro-care-server.vercel.app/services?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setManageServices(data));
  }, [user.email]);
  return (
    <div className=" flex flex-col items-center justify-center">
      <Helmet>
        <title>ElectroCare | Manage Services</title>
      </Helmet>
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold text-blue-900 my-4">
        Manage Your Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 m-2 min-h-[calc(100vh-382px)]">
        {manageServices.map((service, idx) => (
          <ManageService
            key={idx}
            service={service}
            handleDelete={handleDelete}
          ></ManageService>
        ))}
      </div>
    </div>
  );
};

export default ManageServices;
