import React from "react";
import Auction from "@/components/auction";
import News from "@/components/news";
import Brands from "@/components/brands";
import Products from "@/components/product";
import Sales from "@/components/sales";
import Useful from "@/components/usefil";
import Carousel from "@/components/carousel";
import Categories from "@/components/categories";
const Index = () => {
  return (
    <div>
      <Carousel />
      <Categories />
      <Auction />
      <News />
      <Products />
      <Sales />
      <Useful />
      <Brands />
    </div>
  );
};

export default Index;
