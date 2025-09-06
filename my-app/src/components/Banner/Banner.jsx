import React from "react";
import Button from "../Button/Button";
import data from "../../../db.json";

const Banner = () => {
  return (
    <section className="banner-section mt-[70px]">
      {data.banner.map((item, i) => {
        return (
          <div key={i}
            className="h-90 w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute right-0 top-[20%] flex justify-center items-center gap-4 flex-col w-full max-w-[587px]">
              <p className="text-[21px] text-white text-center">{item.desc}</p>
              <Button to={item.link} />
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Banner;
