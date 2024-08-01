import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

import React from "react";
import Image from "next/image";
import Img1 from "@/public/images/img1.png";
import Img2 from "@/public/images/img2.png";
import Img3 from "@/public/images/img3.png";
import Img4 from "@/public/images/img4.png";

const products = [
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Img1,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Img2,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Img3,
  },
  {
    name: "Бутса Nike Mercurial Superfly 8 FG",
    oldPrice: "750 000",
    newPrice: "500 000",
    image: Img4,
  },
];

const Index = () => {
  return (
    <div className="bg-custom-gray font-Fira-sans min-h-screen mt-[80px] pt-[70px]">
      <div className="container mx-auto p-4">
        <h1 className=" text-[32px] text-center lg:text-left lg:text-4xl font-medium leading-normal mb-[42px]">
          Акция
        </h1>
        <div className=" flex justify-center">
          <div className="grid  lg:mx-0 grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-[24px]">
            {products.map((product, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg  w-[292px] bg-white relative cursor-pointer transform transition-transform hover:scale-105"
              >
                <div className="relative pt-[25px]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={242}
                    height={194}
                    className="w-full"
                  />
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md transition-colors hover:bg-gray-200">
                    <FiHeart className="" />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 w-[216px]">
                    {product.name}
                  </h3>
                  <div className="text-red-500 font-bold text-xl">
                    {product.newPrice} uzs
                  </div>
                  <div className="text-gray-500 line-through mb-1">
                    {product.oldPrice} uzs
                  </div>
                  <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg flex items-center justify-center transition-colors hover:bg-yellow-600">
                    <FaShoppingCart className="mr-2" /> Корзина
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
