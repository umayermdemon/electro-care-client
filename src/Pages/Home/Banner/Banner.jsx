import bannerImg from "../../../assets/Images/banner.jpg";

const Banner = () => {
  return (
    <div className="w-full relative">
      <img
        src={bannerImg}
        alt=""
        className="w-full h-[300px] md:h-[350px] lg:h-[820px] object-fill"
      />
      <div className="bg-[#0C336A] opacity-80 absolute flex items-center justify-center text-white w-1/2 top-0 h-[300px] md:h-[350px] lg:h-[820px]">
        <div className="text-justify flex p-2 md:w-2/3 lg:w-1/2 flex-col  justify-end space-y-2 md:space-y-4 lg:space-y-4">
          <h1
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="md:text-xl lg:text-4xl font-bold "
          >
            Restore Functionality, <br /> Revive Devices
          </h1>
          <p
            data-aos="zoom-in"
            data-aos-duration="3000"
            className="text-gray-200 text-xs md:text-sm lg:text-base"
          >
            Get your gadgets back to optimal condition with our professional
            electronic item repairing services. From screen replacements to
            water damage repairs, our skilled technicians ensure quality
            solutions for all your device needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
