import fb from "../assets/img/FacebookFoot.png";
import ig from "../assets/img/InstagramFoot.png";
import linkedin from "../assets/img/LinkedInFoot.png";
import logo from "../assets/img/logoFoot.png";
import { contact, ourExpertise, ourInfo } from "../constant";

const Footer = () => {
  return (
    <footer className="bg-orange-600 text-white py-10">
      <div className="px-20 mx-auto flex flex-wrap justify-between">
        {/* Company Info */}
        <div className="grid grid-cols-1 mb-6 items-center">
          <img src={logo} alt="" />
          <p className="general-sans-light text-lg">
            IFCON TECHNOLOGY SDN. BHD.
          </p>
          {/* Social Icons */}
          <div className="mb-6 flex space-x-7">
            <a href="https://facebook.com" className="hover:opacity-75">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="https://instagram.com" className="hover:opacity-75">
              <img src={ig} alt="Instagram" />
            </a>
            <a href="https://linkedin.com" className="hover:opacity-75">
              <img src={linkedin} alt="LinkedIn" />
            </a>
          </div>
        </div>

        {/* Our Info */}
        <div className="mb-6">
          <h3 className="font-urbanist font-semibold text-lg mb-2">Our Info</h3>
          <ul>
            {ourInfo.map((item, index) => (
              <li key={index} className="mb-1">
                <a
                  href={item.href}
                  className="hover:underline font-urbanist font-normal text-base"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Expertise */}
        <div className="mb-6">
          <h3 className="font-urbanist font-semibold text-lg mb-2">
            Our Expertise
          </h3>
          {ourExpertise.map((item, index) => (
            <ul key={index}>
              <li className="mb-1 font-urbanist font-normal text-base">
                {item.label}
              </li>
            </ul>
          ))}
        </div>

        {/* Contact Info */}
        <div className="mb-6 w-48">
          <h3 className="font-urbanist font-semibold text-lg mb-2">Contact</h3>
          <ul>
            {contact.map((item, index) => (
              <li key={index} className="mb-1 flex items-center gap-2">
                <img src={item.image} alt="" />
                <a href="" className="font-urbanist font-normal text-base">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-20 font-inter font-light text-sm text-center md:text-end text-white mt-6">
        © KonSultanQ - All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
