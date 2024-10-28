import Herobg from "../assets/img/Herobg.png";
import linkedin1 from "../assets/img/linkedin1.png";
import fb1 from "../assets/img/fb1.png";
import ig1 from "../assets/img/ig1.png";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative ssm:px-6 ssm:py-4 md:px-9 md:py-8 lg:py-11">
      <img
        className="w-full h-80 sm:h-full bg-cover bg-center"
        src={Herobg}
        alt=""
      />
      <div className="absolute flex flex-col justify-between ssm:px-6 ssm:py-4 md:px-9 md:py-[4%] inset-0">
        <div className="flex justify-between px-9">
          <div className="grid grid-cols-1 text-white mt-[7%] w-[730px]">
            <h1 className="font-urbanist font-normal text-base">#since2009</h1>
            <h1 className="font-urbanist font-medium ssm:text-[26px] sm:text-[34px] md:text-[44px] lg:text-[64px] sm:leading-normal">
              Bringing latest technology closer to your business
            </h1>
            <h1 className="font-urbanist font-medium text-base">
              We leverage new technologies for the success of your business
            </h1>
            <div className="flex font-urbanist font-medium ssm:text-[10px] sm:text-xs text-base gap-x-4 sm:mt-4 mt-6">
              <button className="flex items-center bg-white text-black rounded-full px-3 py-2 sm:px-[18px] sm:py-[14px]">
                Explore Now
              </button>
              <button className="flex items-center bg-white bg-opacity-30 backdrop-blur-sm text-white rounded-full px-3 py-2 sm:px-[18px] sm:py-[14px]">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex hidden justify-between">
          <div className="flex md:gap-x-0 gap-x-7">
            <div className="flex items-center gap-x-3 md:w-[98%] w-32 ">
              <h1 className="font-urbanist font-semibold md:text-1xl lg:text-4xl">
                10
              </h1>
              <span className="font-urbanist font-medium md:text-xs lg:text-base text-black text-opacity-50">
                In house developer
              </span>
            </div>
            <div className="flex items-center gap-x-3 md:w-[98%] w-[155px]">
              <h1 className="font-urbanist font-semibold md:text-1xl lg:text-4xl">
                350
              </h1>
              <span className="font-urbanist font-medium md:text-xs lg:text-base text-black text-opacity-50">
                Trusted clients
              </span>
            </div>
            <div className="flex items-center gap-x-3 md:w-[98%] w-[197px]">
              <h1 className="font-urbanist font-semibold md:text-1xl lg:text-4xl">
                850
              </h1>
              <span className="font-urbanist font-medium md:text-xs lg:text-base text-black text-opacity-50">
                Successfully delivery projetcts
              </span>
            </div>
          </div>
          <div className="flex items-center md:mr-[1%] mr-[5%] gap-x-3 text-white">
            <img
              className=" md:w-[32px] lg:w-[52px]  "
              src={linkedin1}
              alt=""
            />
            <img className=" md:w-[32px] lg:w-[52px]  " src={fb1} alt="" />
            <img className=" md:w-[32px] lg:w-[52px]  " src={ig1} alt="" />
            <span className="font-urbanist font-medium md:text-xs text-base">
              Find us on social media
            </span>
          </div>
        </div>
      </div>
      <div className="ssm:hidden grid gap-y-4 justify-center justify-items-center mt-5">
        <div className="sm:flex md:gap-x-0 gap-x-7">
          <div className="flex items-center gap-x-3 ssm:w-full sm:w-[98%] w-32 ">
            <h1 className="font-urbanist font-semibold ssm:text-2xl">10</h1>
            <span className="font-urbanist font-medium md:text-xs lg:text-base text-black text-opacity-50">
              In house developer
            </span>
          </div>
          <div className="flex items-center gap-x-3 ssm:w-full sm:w-[98%] w-[155px]">
            <h1 className="font-urbanist font-semibold ssm:text-2xl">350</h1>
            <span className="font-urbanist font-medium md:text-xs lg:text-base text-black text-opacity-50">
              Trusted clients
            </span>
          </div>
          <div className="flex items-center gap-x-3 ssm:w-full sm:w-[98%] w-[197px]">
            <h1 className="font-urbanist font-semibold ssm:text-2xl">850</h1>
            <span className="font-urbanist font-medium md:text-xs lg:text-base text-black text-opacity-50">
              Successfully delivery projetcts
            </span>
          </div>
        </div>
        <div className="flex items-center md:mr-[1%] mr-[5%] gap-x-3 text-black">
          <div className="border-[2px] px-2 py-2 rounded-full">
            <FaLinkedin className="text-4xl" />
          </div>
          <div className="border-[2px] px-2 py-2 rounded-full">
            <FaFacebook className="text-4xl" />
          </div>
          <div className="border-[2px] px-2 py-2 rounded-full">
            <FaInstagram className="text-4xl" />
          </div>
          <span className="font-urbanist font-medium md:text-xs text-base">
            Find us on social media
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
