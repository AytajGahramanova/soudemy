import React from "react";
import { Link } from "react-router-dom";
import data from "../../../db.json";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const usefulLinkMap = {
    Home: "/",
    Shop: "/shop",
    "About us": "/about",
    Blog: "/blog",
    Contact: "/contact",
  };

  const socialMap = {
    Instagram: <FaInstagram className="inline mr-2" />,
    Facebook: <FaFacebook className="inline mr-2" />,
    Twitter: <FaTwitter className="inline mr-2" />,
    Pinterest: <FaPinterest className="inline mr-2" />,
    Youtube: <FaYoutube className="inline mr-2" />,
  };
  return (
    <footer className="bg-[#2B2B2B] p-[36px] mt-20">
      <div className="w-[90%] m-auto">
        <h2 className="text-[#E9E9E9] font-medium text-[28px] mb-[30px]">
          {data.footer.logo}
        </h2>
        <div className="flex justify-between flex-col md:flex-row  gap-[18px] md:gap-0">
          <div className="md:w-1/4 w-full">
            <h3 className="text-[#E9E9E9] text-[20px] font-medium mb-[20px]">
              {data.footer.about.title}
            </h3>
            <span className="text-[#ABABAB]">
              {data.footer.about.description}
            </span>
          </div>
          <div>
            <h3 className="text-[#E9E9E9] text-[20px] font-medium mb-[20px]">
              {data.footer.useful.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {data.footer.useful.links.map((link) => (
                <li key={link}>
                  <Link
                    to={usefulLinkMap[link] || "/"}
                    className="text-[#ABABAB] hover:text-[#A65009] transition"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-[#E9E9E9] text-[20px] font-medium mb-[20px]">
              {data.footer.download.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {data.footer.download.links.map((social) => (
                <li key={social}>
                  <Link
                    to={"/"}
                    className="text-[#ABABAB] hover:text-[#A65009] transition flex items-center"
                  >
                    {socialMap[social]}
                    {social}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col md:w-1/4 w-full">
            <h3 className="text-[#E9E9E9] text-[20px] font-medium mb-[20px]">
              {data.footer.callCenter.title}
            </h3>
            <span className="text-[#ABABAB]">
              {data.footer.callCenter.description}
            </span>
            <Link
              to={`mailto:${data.footer.callCenter.email}`}
              className="text-[#ABABAB] mb-3 mt-3"
            >
              {data.footer.callCenter.email}
            </Link>
            <Link
              to={`tel:${data.footer.callCenter.phone}`}
              className="text-[#ABABAB]"
            >
              {data.footer.callCenter.phone}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
