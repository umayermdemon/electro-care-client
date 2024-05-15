const Preview = () => {
  return (
    <div className="w-full relative my-4">
      <img
        src="https://i.ibb.co/cD7pp2X/Camera-Repair.jpg"
        alt=""
        className="w-full h-[300px] md:h-[350px] lg:h-[400px] object-fill"
      />
      <div className="bg-black opacity-80 absolute flex flex-col justify-center items-center text-white w-full top-0 h-[300px] md:h-[350px] lg:h-[400px]">
        <div>
          <h1 className="md:text-xl lg:text-5xl text-center font-bold ">
            Trust Professionals, <br /> Fix Your Mobile Phone in our Service
          </h1>
        </div>
        <div className="flex flex-row gap-36 mt-8 justify-center">
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-extrabold ">1321</h1>
            <h5 className="text-sm">Mobile Fixed</h5>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-extrabold ">21</h1>
            <h5 className="text-sm">Awards winning</h5>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-extrabold ">11</h1>
            <h5 className="text-sm">Years of Experience</h5>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-extrabold ">868</h1>
            <h5 className="text-sm">Satisfied Clients</h5>
          </div>
          <div className="text-center space-y-2">
            <h1 className="text-5xl font-extrabold ">31</h1>
            <h5 className="text-sm">Professional Fixers</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
