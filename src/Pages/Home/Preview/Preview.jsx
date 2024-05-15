const Preview = () => {
  return (
    <div className="w-full relative my-4">
      <img
        src="https://i.ibb.co/cD7pp2X/Camera-Repair.jpg"
        alt=""
        className="w-full h-[250px] md:h-[350px] lg:h-[400px] object-fill"
      />
      <div className="bg-black opacity-80 absolute flex flex-col justify-center items-center text-white w-full top-0 h-[250px] md:h-[350px] lg:h-[400px]">
        <div>
          <h1 className="md:text-xl lg:text-5xl text-center font-bold ">
            Trust Professionals, <br /> Fix Your Mobile Phone in our Service
          </h1>
        </div>
        <div className="flex flex-row mx-2 lg:mx-0 gap-6 lg:gap-36 mt-8 justify-center">
          <div className="text-center space-y-2">
            <h1 className=" md:text-4xl lg:text-5xl font-extrabold ">1321</h1>
            <h5 className="text-xs lg:text-sm">Mobile Fixed</h5>
          </div>
          <div className="text-center space-y-2">
            <h1 className=" md:text-4xl lg:text-5xl font-extrabold ">21</h1>
            <h5 className="text-xs lg:text-sm">Awards winning</h5>
          </div>
          <div className="text-center space-y-2">
            <h1 className=" md:text-4xl lg:text-5xl font-extrabold ">11</h1>
            <h5 className="text-xs lg:text-sm">Years of Experience</h5>
          </div>
          <div className="text-center space-y-2">
            <h1 className=" md:text-4xl lg:text-5xl font-extrabold ">868</h1>
            <h5 className="text-xs lg:text-sm">Satisfied Clients</h5>
          </div>
          <div className="text-center space-y-2">
            <h1 className=" md:text-4xl lg:text-5xl font-extrabold ">31</h1>
            <h5 className="text-xs lg:text-sm">Professional Fixers</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
