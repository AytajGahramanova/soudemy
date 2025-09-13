import React, { useEffect, useState } from "react";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isFixedHeader, setIsFixedHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
        setIsFixedHeader(true);
      } else {
        setIsVisible(false);
        setIsFixedHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div
        className={`w-full bg-white shadow transition-all duration-300 ${
          isFixedHeader ? "fixed top-0 left-0 z-[999]" : "relative"
        }`}
      ></div>

      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-[#CC9A65] text-white shadow-lg hover:bg-[#A65009] transition duration-300 cursor-pointer"
        >
          <FaChevronUp />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
