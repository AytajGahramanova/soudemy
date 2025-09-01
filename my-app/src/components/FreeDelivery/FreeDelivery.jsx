import React from "react";
import data from "../../../db.json";
const FreeDelivery = () => {
  return (
    <section className="mt-[120px]">
      <div className="w-[90%] m-auto flex items-center justify-between">
        {data.freeDelivery?.map((item) => {
          return (
            <div className="flex flex-col gap-[15px]">
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
    </section>
  );
};

export default FreeDelivery;
