import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Button = ({
  to,
  text = "View More",
  borderColor = "white",
  fill = "white",
}) => {
  return (
    <div>
      <Link to={to}>
        <button
          className={`flex items-center gap-[23px] px-[56px] py-[15px] md:py-[20px] border cursor-pointer`}
          style={{ borderColor: borderColor }}
        >
          {text}
          <MdOutlineKeyboardArrowRight
            className="text-[25px]"
            style={{ fill: fill }}
          />
        </button>
      </Link>
    </div>
  );
};

export default Button;
