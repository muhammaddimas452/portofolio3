import { useState } from "react";
import Logo from "../assets/img/Logo.png";
import { navItems1 } from "../constant";
import { navItems2 } from "../constant";
import { navItems } from "../constant";

import { HiMenu } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 ssm:px-6 ssm:py-4 md:px-9 md:py-[26px] bg-white ">
      <div className="flex ssm:hidden lg:flex text-white uppercase items-center justify-between">
        <ul className="flex gap-x-3">
          {navItems1.map((item, index) => (
            <li
              key={index}
              className="flex text-black uppercase px-3 py-2 bg-[#F6F6F6] rounded-[100px] hover:text-[#D55A21] hover:bg-[#FDF7EF]"
            >
              <a href={item.href} className="helveticalNeue">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="" className="flex gap-x-2 items-center">
          <img src={Logo} alt="" />
        </a>
        <ul className="flex gap-x-3">
          {navItems2.map((item, index) => (
            <li
              key={index}
              className="flex text-black uppercase px-3 py-2 bg-[#F6F6F6] rounded-[100px] hover:text-[#D55A21] hover:bg-[#FDF7EF]"
            >
              <a href={item.href} className="helveticalNeue">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="ssm:flex items-center justify-between lg:hidden uppercase">
        <div className="flex gap-x-2 items-center">
          <img src={Logo} alt="" />
        </div>
        <div>
          <button onClick={toggleNavbar}>
            {mobileDrawerOpen ? (
              <IoClose className="text-3xl" />
            ) : (
              <HiMenu className="text-3xl" />
            )}
          </button>
        </div>
      </div>
      {mobileDrawerOpen && (
        <div className="fixed right-0 z-40 bg-white ssm:top-[68px] sm:top-[68px] md:top-[88px] w-full overflow-hidden text-black h-screen block lg:hidden">
          <ul className="flex flex-col lg:hidden justify-center items-center uppercase">
            {navItems.map((item, index) => (
              <li
                key={index}
                className="border-b-[1px] w-full text-center mt-5"
              >
                <a href={item.href} className="">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Nav;
