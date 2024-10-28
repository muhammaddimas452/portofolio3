import { company } from "../constant";

export const Company = () => {
  return (
    <div className="grid justify-center gap-8 bg-[#FDF7EF] px-20 sm:px-[120px] py-[52px]">
      <div className="text-center">
        <h1>Trusted by Industry Leaders</h1>
      </div>
      <div className="grid grid-cols-2 md:flex items-center justify-center gap-12 lg:gap-16">
        {company.map((item, index) => (
          <div className="" key={index}>
            <img src={item.image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};
