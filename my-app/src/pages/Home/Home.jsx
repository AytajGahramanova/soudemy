import React from "react";
import FadeIn from "../../components/FadeIn/FadeIn";

import Slider from "../../components/Slider/Slider";
import ProductsOfWeek from "../../components/ProductsOfWeek/ProductsOfWeek";
import FreeDelivery from "../../components/FreeDelivery/FreeDelivery";
import Order from "../../components/Order/Order";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import Banner from "../../components/Banner/Banner";
import VideoCover from "../../components/VideoCover/VideoCover";
import Products from "../../components/Products/Products";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";

const Home = () => {
  return (
    <div>
      <ScrollToTop />
      <FadeIn>
        <Slider />
      </FadeIn>
      <FadeIn>
        <ProductsOfWeek />
      </FadeIn>
      <FadeIn>
        <Banner />
      </FadeIn>
      <FadeIn>
        <VideoCover />
      </FadeIn>
      <FadeIn>
        <Products />
      </FadeIn>
      <FadeIn>
        <Order />
      </FadeIn>
      <FadeIn>
        <FreeDelivery />
      </FadeIn>
      <FadeIn>
        <BlogComponent />
      </FadeIn>
    </div>
  );
};

export default Home;
