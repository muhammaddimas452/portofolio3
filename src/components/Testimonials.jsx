import { testimonialsList } from "../constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 0, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <div>
      <div className="grid justify-center justify-items-center">
        <div className="flex font-urbanist font-semibold text-xs text-[#E57B3A] p-3 bg-[#FDF7EF] rounded-full">
          Primary Technology
        </div>
        <h1 className="capitalize font-urbanist font-semibold text-center lg:text-start ssm:text-[32px] md:text-[48px]">
          Client <span className="text-[#E57B3A]"> satisfaction </span> is our
          priority
        </h1>
      </div>
      <div className="py-12">
        <Carousel responsive={responsive} infinite={true}>
          {testimonialsList.map((item, index) => (
            <div key={index} data-aos="zoom-in" className="relative">
              <img
                className="ssm:w-full sm:w-[470px] h-[420px]"
                src={item.bg}
                alt=""
              />
              <div className="absolute inset-0 flex flex-col justify-between ssm:w-[90%] sm:w-fit ssm:px-6 md:px-11 py-8">
                <h1 className="capitalize font-urbanist font-medium ssm:leading-10 md:leading-10 ssm:text-lg md:text-[20px] ">
                  {item.comment}
                </h1>
                <div className="flex gap-x-2 items-center">
                  <img className="w-12 h-w-12" src={item.profile} alt="" />
                  <div>
                    <h1 className="font-urbanist font-bold text-[18px]">
                      {item.name}
                    </h1>
                    <span className="font-urbanist font-medium text-[#E57B3A] text-base">
                      {item.as}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
