import React from "react";
import data from "../../../db.json";
import { Link } from "react-router-dom";

const BlogComponent = () => {
  return (
    <section className="blog-section">
      <div className="w-[90%] m-auto flex items-center justify-between flex-wrap gap-3">
        {data.blogComponent?.map((item, i) => {
          return (
            <div key={i} className="flex flex-col gap-[15px]">
              <div className="flex items-center flex-col gap-[14px]">
                <div>
                  <img src={item.image} alt="img" />
                </div>
                <div className="flex flex-col text-center">
                  <p className="text-[#777777] text-[16px]">
                    {item.date} / {item.author}
                  </p>
                  <h3 className="mt-[15px] mb-[22x] text-[#2D2D2D] font-semibold text-[20px] w-full max-w-[280px]">
                    Your office should have only natural materials
                  </h3>
                  <Link
                    to={item.link}
                    className="text-[#777777] text-[18px] underline"
                  >
                    {item.linkText}
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default BlogComponent;
