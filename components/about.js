"use client";
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import productsApi from "@/service/products";
import { useState, useEffect } from "react";
import Image from "next/image";

const Index = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await productsApi.get();
      console.log("API Response:", response);

      if (response.data && Array.isArray(response.data)) {
        setData(response.data);
      } else if (response.data && Array.isArray(response.data.products)) {
        setData(response.data.products);
      } else {
        console.error("Unexpected response structure:", response);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="font-Fira-sans min-h-screen pb-12">
      <div className="flex justify-center">
        <div className=" flex flex-col gap-4 sm:flex-col lg:flex-row">
          {data.length > 0 ? (
            data?.map((product, index) => (
              <div
                onClick={() => window.open(`/products/${product?.product_id}`)}
                key={index}
                className="border rounded-lg overflow-hidden shadow-lg w-[292px] bg-white relative cursor-pointer transform transition-transform hover:scale-105"
              >
                <div className="relative pt-[25px]">
                  {product.image_url && product.image_url.length > 0 ? (
                    <Image
                      src={product.image_url[0]}
                      alt={product.product_name}
                      width={242}
                      height={194}
                      className="w-full"
                    />
                  ) : (
                    <div className="w-[242px] h-[194px] bg-gray-200 flex items-center justify-center">
                      No Image
                    </div>
                  )}
                  <button className="absolute top-2 right-2 bg-white p-1 rounded-full shadow-md transition-colors hover:bg-gray-200">
                    <FiHeart />
                  </button>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold mb-2 w-[216px]">
                    {product.product_name}
                  </h3>
                  <div className="text-red-500 font-bold text-xl">
                    {product.cost - (product.cost * product.discount) / 100} uzs
                  </div>
                  <div className="text-gray-500 line-through mb-1">
                    {product.cost} uzs
                  </div>
                  <button className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg flex items-center justify-center transition-colors hover:bg-yellow-600">
                    <FaShoppingCart className="mr-2" /> Корзина
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div>No products available</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
