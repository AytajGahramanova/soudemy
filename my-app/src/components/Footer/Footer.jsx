import React from "react";
import data from "../../../db.json";

const Footer = () => {
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
            {data.footer.useful.links.map((item, i) => {
              return (
                <ul key={i}>
                  <li className="text-[#ABABAB] mb-3">{item}</li>
                </ul>
              );
            })}
          </div>
          <div>
            <h3 className="text-[#E9E9E9] text-[20px] font-medium mb-[20px]">
              {data.footer.download.title}
            </h3>
            {data.footer.download.links.map((item, i) => {
              return (
                <ul key={i}>
                  <li className="text-[#ABABAB] mb-3">{item}</li>
                </ul>
              );
            })}
          </div>
          <div className="md:w-1/4 w-full">
            <h3 className="text-[#E9E9E9] text-[20px] font-medium mb-[20px]">
              {data.footer.callCenter.title}
            </h3>
            <span className="text-[#ABABAB]">
              {data.footer.callCenter.description}
            </span>
            <p className="text-[#ABABAB] mb-3 mt-3">
              {data.footer.callCenter.email}
            </p>
            <h5 className="text-[#ABABAB]">{data.footer.callCenter.phone}</h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
