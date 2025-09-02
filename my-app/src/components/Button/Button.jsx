import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Button = ({ props, borderColor = "white", fill = "white" }) => {
  return (
    <div>
      <button
        className={`flex items-center gap-[23px] px-[56px] py-[15px] md:py-[20px] border cursor-pointer`}
        style={{ borderColor: borderColor }}
      >
        <Link to={props}>View more</Link>
        <MdOutlineKeyboardArrowRight className="text-[25px]" style={{ fill: fill }} />
      </button>
    </div>
  );
};

export default Button;
