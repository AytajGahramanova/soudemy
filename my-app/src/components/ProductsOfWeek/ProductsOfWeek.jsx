import React from "react";
import data from "../../../db.json";
import { Link } from "react-router-dom";

const ProductsOfWeek = () => {
  return (
    <section className="products-of-week-section mt-[70px]">
      <div className="w-[90%] m-auto">
        <div className="flex items-center justify-center flex-col gap-[20px] mb-[60px]">
          <h2 className="text-[26px] md:text-[35px] font-medium uppercase">
            Products of the week
          </h2>
          <p className="text-[#8A8A8A] text-[18px] w-max-[680px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
            dolor odio odio malesuada at condimentum adipiscing iaculis semper.
          </p>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          {data.productsWeek?.map((item, i) => {
            return (
              <Link key={i} to={"/shop"}>
                <div>
                  <span className="absolute text-[#878686] text-[17px] font-medium z-5 ml-[2rem] mt-[1rem]">
                    {item.badge}
                  </span>
                  <div className="relative overflow-hidden group">
                    <img
                      className="transition-transform duration-300 group-hover:scale-110"
                      src={item.image}
                      alt="img"
                    />
                  </div>

                  <div className="flex items-center justify-center text-center flex-col gap-[8px] mt-[12px] mb-[12px] md:mt-[27px]">
                    <h3 className="text-[21px] font-medium">{item.title}</h3>
                    <p className="text-[#929292]">{item.price}</p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsOfWeek;
