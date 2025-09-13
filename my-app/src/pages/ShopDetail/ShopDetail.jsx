import React from "react";
import SwiperC from "../../components/Swiper/SwiperC";
import { useParams } from "react-router-dom";
import data from "../../../db.json";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";

const ShopDetail = () => {
  const { id } = useParams();
  const shopItem = data.shopPage.find((item) => item.id === parseInt(id));

  if (!shopItem) return <p>Product not found</p>;

  const initialIndex = data.shopPage.findIndex(
    (item) => item.id === shopItem.id
  );
  return (
    <div className="w-[90%] m-auto">
      <div className="flex md:flex-row flex-col justify-between mt-20 gap-3">
        <div className="md:w-[60%] w-full">
          <SwiperC initialIndex={initialIndex} />
        </div>
        <div className="md:w-[35%] w-full">
          <h3 className="text-[#2B2B2B] font-bold text-[25px]">
            {shopItem.title}
          </h3>
          <p className="text-[#9B9B9B] font-normal text-[17px] mb-2">
            {`Category: ${shopItem.category}`}
          </p>
          <span className="text-[#636363] font-medium">{shopItem.price}</span>
          <p className="text-[#9B9B9B] font-normal text-[17px] my-5">
            {shopItem.desc}
          </p>
        </div>
      </div>
      <RelatedProducts />
      <ScrollToTop />
    </div>
  );
};

export default ShopDetail;
