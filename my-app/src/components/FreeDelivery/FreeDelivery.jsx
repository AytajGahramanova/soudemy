import React from "react";
import data from "../../../db.json";
const FreeDelivery = () => {
  return (
    <section className="free-delivery-section mt-[90px] mb-[90px]">
      <div className="w-[90%] m-auto flex flex-wrap gap-4 items-center justify-center md:justify-between">
        <div className="flex items-center justify-center md:justify-between w-full flex-wrap gap-4">
          {data.freeDelivery?.map((item, i) => {
            return (
              <div key={i} className="flex flex-col gap-[15px] md:text-start text-center justify-center items-center md:items-start">
                <div className="flex items-center gap-[14px]">
                  <div>
                    <img src={item.image} className="w-[45px]" alt="img" />
                  </div>
                  <div>
                    <h2 className="font-semibold text-[25px]">{item.title}</h2>
                  </div>
                </div>
                <div>
                  <p className="text-[#ABABAB] text-[18px] w-full max-w-[300px] leading-6">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FreeDelivery;
