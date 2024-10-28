import { serviceItems } from "../constant";

const Service = () => {
  return (
    <div className="px-20 ssm:py-6 sm:py-8 sm:gap-y-12 ssm:gap-y-14 md:py-[80px]">
      <div className="flex justify-self-start font-urbanist font-semibold text-xs text-[#E57B3A] p-3 bg-[#FDF7EF] rounded-full">
        Our Focus
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:flex items-center lg:justify-between">
        <div className="lg:w-[600px]">
          <h1 className="capitalize font-urbanist font-semibold text-start ssm:text-[32px] md:text-[48px]">
            <span className="text-[#E57B3A]"> Revolutionary Solutions </span>{" "}
            for Modern Challenges
          </h1>
        </div>
        <h1 className="font-urbanist font-normal text-start lg:text-end ssm:text-sm sm:text-base lg:w-[407px]">
          Harnessing the Power of Innovation to Provide Tailored Solutions That
          Propel Your Business Forward in an Ever-Changing World.
        </h1>
      </div>
      <div className="grid gap-7 justify-center md:flex ssm:mt-12 lg:mt-16">
        {serviceItems.map((item, index) => (
          <div className="relative w-full" key={index}>
            <img src={item.image} alt="" />
            <div className="absolute inset-0 text-white flex flex-col justify-end md:w-[90%] lg:w-[275px] pb-[17px] px-[22px]">
              <h1 className="font-urbanist font-semibold ssm:text-2xl md:text-lg lg:text-2xl">
                {item.title}
              </h1>
              <span className="font-urbanist font-semibold ssm:text-sm md:text-xs lg:text-sm text-opacity-90">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
