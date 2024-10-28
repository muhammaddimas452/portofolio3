import technologyImg from "../assets/img/technologyImg.png";
import { technologyList } from "../constant";
import { PiArrowCircleUpRightThin } from "react-icons/pi";

const Technology = () => {
  return (
    <div className="px-20 ssm:py-6 sm:py-8 sm:gap-y-12 ssm:gap-y-14 md:py-[80px]">
      <div className="grid justify-center justify-items-center">
        <div className="flex font-urbanist font-semibold text-xs text-[#E57B3A] p-3 bg-[#FDF7EF] rounded-full">
          Primary Technology
        </div>
        <h1 className="capitalize font-urbanist font-semibold text-center lg:text-start ssm:text-[32px] md:text-[48px]">
          Truly <span className="text-[#E57B3A]"> ideal solutions </span> for
          your business
        </h1>
      </div>
      <div className="grid grid-cols-1 justify-items-center lg:flex gap-10 justify-between items-center mt-11 md:mt-16">
        <img src={technologyImg} alt="" />
        <div className="grid gap-y-4 w-[90%] lg:w-[732px]">
          {technologyList.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center px-4 py-[18px] border-[1px] border-[#C9C9C9] rounded-3xl"
            >
              <h1 className="font-urbanist font-medium text-base sm:text-2xl">
                {item.name}
              </h1>
              <PiArrowCircleUpRightThin className="text-4xl sm:text-[52px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Technology;
