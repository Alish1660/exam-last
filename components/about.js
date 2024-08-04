"use client";
import { FaShoppingCart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";
import productsApi from "@/service/products.service";
import LikePost from "@/service/like.service";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Basket from "@/service/basket.service";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Index = () => {
  const [data, setData] = useState([]);
  const [likedItems, setLikedItems] = useState([]);

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

  const handleLike = async (id) => {
    try {
      const response = await LikePost.postLike(id);
      console.log("Like Response:", response);
      if (response.data === true) {
        const updatedLikedItems = [...likedItems, id];
        toast.success("Product added to wishlist");
        setLikedItems(updatedLikedItems);
        localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
      } else {
        const updatedLikedItems = likedItems.filter((itemId) => itemId !== id);
        toast.success("Product removed from wishlist");

        setLikedItems(updatedLikedItems);
        localStorage.setItem("likedItems", JSON.stringify(updatedLikedItems));
      }
    } catch (error) {
      console.error("Error liking product:", error);
      toast.error("Erorr liking product");
    }
  };

  const handleBasket = async (id) => {
    try {
      const product = { productId: id, quantity: 1 };
      const response = await Basket.basketPost(product);
      console.log("Basket Response:", response);
      if (response.data === true) {
        console.log("Product added to basket successfully.");
        toast.success("Product added to basket successfully.");
      } else {
        console.error("Failed to add product to basket:", response);
      }
    } catch (error) {
      if (error.message === "EOF") {
        console.error(
          "Server returned an empty response. Please try again later."
        );
      } else {
        console.error("Error adding product to basket:", error);
        toast.error("Error adding product to basket:");
      }
    }
  };

  useEffect(() => {
    getData();
    const storedLikedItems = localStorage.getItem("likedItems");
    if (storedLikedItems) {
      setLikedItems(JSON.parse(storedLikedItems));
    }
  }, []);

  return (
    <>
      <ToastContainer />
      <div className="font-Fira-sans min-h-screen pb-12">
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:flex-col lg:flex-row">
            {data.length > 0 ? (
              data.map((product, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden shadow-lg w-[292px] bg-white relative cursor-pointer transform transition-transform hover:scale-105"
                >
                  <div className="relative w-full h-[400px]">
                    {product.image_url && product.image_url.length > 0 ? (
                      <Image
                        src={product.image_url[0]}
                        alt={product.product_name}
                        layout="fill"
                        objectFit="cover"
                        className="w-full h-full"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                        No Image
                      </div>
                    )}
                    <button
                      className={`absolute top-2 right-2 p-1 rounded-full shadow-md transition-colors ${
                        likedItems.includes(product.product_id)
                          ? "bg-red-500 text-white"
                          : "bg-white hover:bg-gray-200"
                      }`}
                      onClick={() => handleLike(product.product_id)}
                    >
                      <FiHeart />
                    </button>
                  </div>
                  <div className="p-4">
                    <Link
                      href={`/products/${product?.product_id}`}
                      className="text-lg font-bold mb-2 w-[216px]"
                    >
                      {product.product_name}
                    </Link>
                    <div className="text-red-500 font-bold text-xl">
                      {product.cost - (product.cost * product.discount) / 100}{" "}
                      uzs
                    </div>
                    <div className="text-gray-500 line-through mb-1">
                      {product.cost} uzs
                    </div>
                    <button
                      onClick={() => handleBasket(product.product_id)}
                      className="mt-4 w-full bg-yellow-500 text-white py-2 rounded-lg flex items-center justify-center transition-colors hover:bg-yellow-600"
                    >
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
    </>
  );
};

export default Index;
