import React from "react";
import data from "../../../db.json";
import { Link } from "react-router-dom";

const RelatedProducts = () => {
  return (
    <div>
      <div className="flex justify-between md:flex-row flex-col mt-5">
        <div className="flex justify-center flex-wrap gap-10 w-full md:justify-between mt-[30px]">
          <h2 className="font-bold text-[27px] text-[#2B2B2B]">
            Related products
          </h2>
          <div className="flex items-center justify-between w-full md:flex-row flex-col gap-10 md:gap-0">
            {data.shopPage.slice(0, 4).map((item) => {
              return (
                <Link to={"/shop"}>
                  <div
                    key={item.id}
                    className="cursor-pointer w-[300px] h-[350px]"
                  >
                    <div className="overflow-hidden group">
                      <img
                        className="w-full transition-transform duration-300 group-hover:scale-110"
                        src={`../img/${item.img}`}
                        alt={item.title}
                      />
                    </div>
                    <div className="flex items-center flex-col text-center mt-3">
                      <p className="font-medium text-[17px]">{item.title}</p>
                      <span className="text-[#6B6B6B] text-[16px]">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
