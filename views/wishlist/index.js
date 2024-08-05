"use client";
import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import Like from "@/service/like.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Wishlist = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await Like.get();
      console.log(response);
      setData(response.data.products || []);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLike = async (id) => {
    try {
      const response = await Like.unLike(id);
      if (response.data) {
        setData((prevData) =>
          prevData.filter((product) => product.product_id !== id)
        );
        toast.success("Product removed wishlist");
      } else {
        console.error("Error processing like action");
      }
    } catch (error) {
      console.error("Error liking/unliking product:", error);
      toast.error("Error unliking product ");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="container mx-auto py-8 mt-[70px]">
        <h1 className="text-[24px]">Wishlist</h1>
        <div className="flex justify-around relative flex-wrap gap-4 md:gap-8 mt-4">
          {data.map((product) => (
            <div key={product.product_id} className="relative m-4">
              <div className="w-[250px] h-[350px] bg-white flex flex-col items-center justify-between relative shadow-md">
                <div
                  className="absolute right-[20px] top-[20px] cursor-pointer"
                  onClick={() => handleLike(product.product_id)}
                >
                  <FaHeart className=" text-red-500" />
                </div>
                <div className="w-[150px] h-[194px] grid justify-center items-center z-[999]">
                  <img
                    src={product.image_url[0] || "/default-image.png"}
                    alt={product.product_name}
                    width={150}
                    height={194}
                  />
                </div>
                <div className="px-3 text-center">
                  <h1 className="text-[14px] sm:text-[16px] md:text-[18px]">
                    {product.product_name}
                  </h1>
                  <p className="text-red-700 font-bold text-[16px] sm:text-[18px] md:text-[20px]">
                    {product.cost} uzs
                  </p>
                  {product.discount > 0 && (
                    <span className="line-through opacity-50 text-[#1F1D14] text-[12px] sm:text-[14px] md:text-[16px]">
                      {Math.ceil(product.cost / (1 - product.discount / 100))}{" "}
                      uzs
                    </span>
                  )}
                </div>
                <Link
                  onClick={() => Cookie.set("product_id", product.product_id)}
                  href={`/${product.product_id}`}
                  className="py-[10px] w-full border-2 bg-[#FBD029] rounded-lg text-center text-[14px] sm:text-[16px] md:text-[18px]"
                >
                  Корзина
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
