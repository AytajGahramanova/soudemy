import React from "react";
import data from "../../../db.json";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { Link } from "react-router-dom";

const VideoCover = () => {
  return (
    <section className="video-cover">
      {data.videoCover.map((item, i) => {
        return (
          <div key={i}
            className="h-[550px] w-full bg-cover bg-center relative"
            style={{ backgroundImage: `url(${item.img})` }}
          >
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform">
              <div className="relative">
                <img
                  className="w-[70px] h-[70px]"
                  src={item["img-player"]}
                  alt=""
                />
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 transform cursor-pointer">
                  <Link to={item.link} target="blank">
                    <TbPlayerPlayFilled className="text-white text-[22px]" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default VideoCover;
