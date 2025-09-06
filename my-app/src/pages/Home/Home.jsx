import React from "react";
import Slider from "../../components/Slider/Slider";
import ProductsOfWeek from "../../components/ProductsOfWeek/ProductsOfWeek";
import FreeDelivery from "../../components/FreeDelivery/FreeDelivery";
import Order from "../../components/Order/Order";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import Banner from "../../components/Banner/Banner";
import VideoCover from "../../components/VideoCover/VideoCover";
import Products from "../../components/Products/Products";

const Home = () => {
  return (
    <div>
      <Slider />
      <ProductsOfWeek />
      <Banner />
      <VideoCover />
      <Products />
      <Order />
      <FreeDelivery />
      <BlogComponent />
    </div>
  );
};

export default Home;
