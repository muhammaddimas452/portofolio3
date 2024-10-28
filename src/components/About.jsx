import AboutImg from "../assets/img/Aboutimg.png";

export const About = () => {
  return (
    <div className="grid grid-cols-1 lg:flex justify-between items-center gap-x-10 ssm:justify-items-center lg:justify-items-start px-20 ssm:py-6 sm:py-8 sm:gap-y-12 ssm:gap-y-14 md:py-[80px]">
      <div className="grid justify-items-start lg:w-[600px]">
        <div className="font-urbanist font-semibold text-xs text-[#E57B3A] p-3 bg-[#FDF7EF] rounded-full">
          About Us
        </div>
        <h1 className="capitalize font-urbanist font-semibold ssm:text-[32px] md:text-[42px] lg:text-[48px]">
          We Are <span className="text-[#E57B3A]"> Modern Technology </span>{" "}
          Agency
        </h1>
        <span className="capitalize font-urbanist font-medium ssm:text-sm md:text-base">
          Founded in 2009 by young and progressive Malaysian entreprenuer Nik
          Izwan. Ifcon Technology is 100% bumiputera Malaysian ownd technology
          developer that provides few services based on latest technology in the
          market.
        </span>
        <br />
        <span className="capitalize font-urbanist font-medium ssm:text-sm md:text-base">
          We are technology integrator and developer. Focuses on Software
          Development Blockchain, Drone and IOT
        </span>
        <button className="flex items-center mt-6 font-urbanist font-medium text-white ssm:text-sm md:text-xl ssm:px-7 ssm:py-[14px] md:px-8 md:py-4 bg-[#ED5F00] ssm:rounded-2xl md:rounded-[32px]">
          Explore More
        </button>
      </div>
      <div>
        <img src={AboutImg} alt="" />
      </div>
    </div>
  );
};
