import React from "react";
import { TbPlayerPlayFilled } from "react-icons/tb";
import { Link } from "react-router-dom";
import data from "../../../db.json";

const VideoCover = ({ bgImage }) => {
  const items = bgImage
    ? [{ ...data.videoCover[0], img: bgImage }]
    : data.videoCover;

  return (
    <section className="video-cover">
      {items.map((item, i) => (
        <div
          key={i}
          className="h-[550px] w-full bg-cover bg-center relative"
          style={{ backgroundImage: `url(${item.img})` }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              <img
                className="w-[70px] h-[70px]"
                src={item["img-player"]}
                alt=""
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer">
                <Link to={item.link} target="blank">
                  <TbPlayerPlayFilled className="text-white text-[22px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VideoCover;
