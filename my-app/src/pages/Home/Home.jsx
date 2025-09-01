import React from "react";
import Slider from "../../components/Slider/Slider";
import ProductsOfWeek from "../../components/ProductsOfWeek/ProductsOfWeek";
import FreeDelivery from "../../components/FreeDelivery/FreeDelivery";
import Order from "../../components/Order/Order";
import BlogComponent from "../../components/BlogComponent/BlogComponent";

const Home = () => {
  return (
    <div>
      <Slider />
      <ProductsOfWeek />
      <Order />
      <FreeDelivery />
      <BlogComponent />
    </div>
  );
};

export default Home;
