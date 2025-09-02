import React from "react";
import Button from "../Button/Button";
import data from "../../../db.json";

const Order = () => {
  return (
    <section className="order-section mt-[70px] bg-[#EFEFEF] py-[40px] md:py-[80px]">
      <div className="w-[90%] m-auto">
        {data.order?.map((item) => {
          return (
            <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-start gap-[30px] md:gap-[60px]">
              <h2 className="text-[25px] md:text-[30px]">
                {item.text} <strong>{item["bold-text"]}</strong>
              </h2>
              <Button to={item.link} borderColor="black" fill="black" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Order;
