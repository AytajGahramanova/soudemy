import React from "react";
import Button from "../Button/Button";
import data from "../../../db.json";

const Order = () => {
  return (
    <section className="mt-[70px] bg-[#EFEFEF] py-[80px]">
      <div className="w-[90%] m-auto">
        {data.order?.map((item) => {
          return (
            <div className="flex items-center justify-center gap-[60px]">
              <h2 className="text-[30px]">
                {item.text} <strong>{item["bold-text"]}</strong>
              </h2>
              <Button to={item.link} borderColor="black" fill="black"/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Order;
