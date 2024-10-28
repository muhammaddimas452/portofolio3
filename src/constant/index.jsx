import Service1 from "../assets/img/Service1.png";
import Service2 from "../assets/img/Service2.png";
import Service3 from "../assets/img/Service3.png";

import Company1 from "../assets/img/Company1.png";
import Company2 from "../assets/img/Company2.png";
import Company3 from "../assets/img/Company3.png";
import Company4 from "../assets/img/Company4.png";

import Subtract from "../assets/img/Subtract.png";
import Ellips1 from "../assets/img/Ellipse 1.png";
import Ellips2 from "../assets/img/Ellipse 2.png";

import { TfiEmail } from "react-icons/tfi";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export const navItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Web & Mobile Application", href: "#" },
  { label: "Drone", href: "#" },
  { label: "Blockchain", href: "#" },
  { label: "Contact", href: "#" },
];

export const navItems1 = [
  { label: "Home", href: "#", active: "text-black" },
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Web & Mobile Application", href: "#" },
];

export const navItems2 = [
  { label: "Drone", href: "#" },
  { label: "Blockchain", href: "#" },
  { label: "Contact", href: "#" },
];

export const serviceItems = [
  {
    image: Service1,
    title: "IT Developer",
    text: "From software to hardware, front-end to back-end. Localized web hosting and cloud services.",
  },
  {
    image: Service2,
    title: "Blockchain",
    text: "Blockchain Blockchain Development, ICO Consultation and Advice , Coin/Token development.",
  },
  {
    image: Service3,
    title: "Drone",
    text: "Drone Aerial Inspection, Aerial Mapping, Aerial Surveillance, Aerial Videography and Photography.",
  },
];

export const company = [
  {
    image: Company1,
  },
  {
    image: Company2,
  },
  {
    image: Company3,
  },
  {
    image: Company4,
  },
];

export const technologyList = [
  {
    name: "Platform",
  },
  {
    name: "Token Standards",
  },
  {
    name: "Web Frameworks",
  },
  {
    name: "Smart Contract",
  },
  {
    name: "Mobile App",
  },
  {
    name: "Trading Application",
  },
];

export const testimonialsList = [
  {
    bg: Subtract,
    profile: Ellips1,
    comment:
      "“We are very satisfied with the work of this agency's digital team. They succeeded in developing our website and mobile application in a very professional and timely manner.”",
    name: "Dianne Russell",
    as: "Art Advisor",
  },
  {
    bg: Subtract,
    profile: Ellips2,
    comment:
      "“We are very satisfied with the work of this agency's digital team. They succeeded in developing our website and mobile application in a very professional and timely manner.”",
    name: "Jane Cooper",
    as: "Business Analyst",
  },
  {
    bg: Subtract,
    profile: Ellips2,
    comment:
      "“We are very satisfied with the work of this agency's digital team. They succeeded in developing our website and mobile application in a very professional and timely manner.”",
    name: "Dianne Russell",
    as: "Business Analyst",
  },
  {
    bg: Subtract,
    profile: Ellips1,
    comment:
      "“We are very satisfied with the work of this agency's digital team. They succeeded in developing our website and mobile application in a very professional and timely manner.”",
    name: "Jane Cooper",
    as: "Art Advisor",
  },
];

export const ourInfo = [
  { label: "About Us", href: "#" },
  { label: "Contact", href: "#" },
  { label: "Privacy Policy", href: "#" },
  { label: "Site Map", href: "#" },
  { label: "Review Us", href: "#" },
];

export const ourExpertise = [
  { label: "Web Apps", href: "#" },
  { label: "Blockchain", href: "#" },
  { label: "Drone", href: "#" },
];

export const contact = [
  { label: "info@ifcontech.com", href: "#", image: <TfiEmail /> },
  { label: "+603-41418050", href: "#", image: <MdPhoneInTalk /> },
  {
    label:
      "12-08, Level 12, Tower 2, Wangsa 118, No 8, Jalan Wangsa Delima 53300 Wangsa Maju Kuala Lumpur",
    href: "#",
    image: <FaLocationDot />,
  },
];
