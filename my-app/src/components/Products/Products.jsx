import React from "react";
import data from "../../../db.json";
import Button from "../Button/Button";

const Products = () => {
  return (
    <section className="products-section mt-[100px]">
      <div className="w-[90%] m-auto">
        <div className="flex items-center justify-center text-center md:gap-[80px] gap-[40px] flex-col md:flex-row mb-[30px] md:mb-0">
          <div className="flex items-center justify-center text-center flex-col">
            <h2 className="text-[36px] font-medium uppercase">
              {data.products[0].title}
            </h2>
            <span className="text-[#ABABAB] mt-[20px] mb-[48px] text-[22px]">
              {data.products[0].desc}
            </span>
            <Button
              to={data.products[0].link}
              borderColor="black"
              fill="black"
            />
          </div>
          <div className="overflow-hidden group md:w-[60%] w-full">
            <img
              className="transition-transform duration-300 group-hover:scale-110"
              src={data.products[0].img}
              alt="img"
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-center md:gap-[80px] gap-[40px] flex-col-reverse md:flex-row mb-[30px] md:mb-0">
          <div className="overflow-hidden group md:w-[60%] w-full">
            <img
              className="transition-transform duration-300 group-hover:scale-110"
              src={data.products[1].img}
              alt="img"
            />
          </div>
          <div className="flex items-center justify-center text-center flex-col">
            <h2 className="text-[36px] font-medium uppercase">
              {data.products[1].title}
            </h2>
            <span className="text-[#ABABAB] mt-[20px] mb-[48px] text-[22px]">
              {data.products[1].desc}
            </span>
            <Button
              to={data.products[1].link}
              borderColor="black"
              fill="black"
            />
          </div>
        </div>
        <div className="flex items-center justify-center text-center md:gap-[80px] gap-[40px] flex-col md:flex-row mb-[30px] md:mb-0">
          <div className="flex items-center justify-center text-center flex-col">
            <h2 className="text-[36px] font-medium uppercase">
              {data.products[2].title}
            </h2>
            <span className="text-[#ABABAB] mt-[20px] mb-[48px] text-[22px]">
              {data.products[2].desc}
            </span>
            <Button
              to={data.products[2].link}
              borderColor="black"
              fill="black"
            />
          </div>
          <div className="overflow-hidden group md:w-[60%] w-full">
            <img
              className="transition-transform duration-300 group-hover:scale-110"
              src={data.products[2].img}
              alt="img"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
