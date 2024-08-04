"use client";
import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./carousel.css";
import Image from "next/image";
import cart from "@/public/images/cart.png";
import sliders from "@/public/images/sliders.png";
import share from "@/public/images/share.png";
import { useParams } from "next/navigation";
import http from "@/api/interseptors";
import Link from "next/link";
import Basket from "@/service/basket.service";
import Comment from "@/service/comment.service";
import avatar from "@/public/images/avatar.png";

const SingleProductPage = () => {
  const [product, setProduct] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const { id } = useParams();

  const getData = async () => {
    try {
      const { data } = await http.get(`/product/${id}`);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleBasket = async (id) => {
    try {
      const product = { productId: id, quantity: 1 };
      const response = await Basket.basketPost(product);
      console.log("Basket Response:", response);
      if (response.data === true) {
        console.log("Product added to basket successfully.");
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
      }
    }
  };

  const getComments = async (id) => {
    try {
      const response = await Comment.get(id);
      console.log(response);
      setComments(response?.Comment);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const commentData = {
        productId: id,
        text: newComment,
      };
      const response = await Comment.post(commentData);
      console.log(response);
      setNewComment("");
      getComments(id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
    getComments(id);
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { product_name, description, made_in, count, cost, image_url } =
    product;

  return (
    <div className="p-4 md:p-8 bg-custom-gray">
      <div className="container">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-[40px] rounded-lg">
          <div className="w-full max-w-[600px] h-[530px] flex flex-col justify-center items-center bg-white rounded-xl">
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              autoPlay={true}
              className="w-[300px] lg:w-[400px] rounded-xl overflow-hidden"
            >
              {image_url && image_url.length > 0 ? (
                image_url.map((url, index) => (
                  <div key={index}>
                    <Image
                      src={url}
                      alt={product_name}
                      width={400}
                      height={500}
                    />
                  </div>
                ))
              ) : (
                <div>
                  <Image
                    src={productImage}
                    alt="Fallback product image"
                    width={370}
                    height={370}
                  />
                </div>
              )}
            </Carousel>
            <div className="flex gap-2 mt-4">
              {image_url &&
                image_url.length > 0 &&
                image_url.map((url, index) => (
                  <div
                    key={index}
                    className="w-20 h-20 bg-white p-2 border-2 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={url}
                      alt={`Thumbnail ${index}`}
                      className="w-full h-full object-cover"
                      width={80}
                      height={80}
                    />
                  </div>
                ))}
            </div>
          </div>
          <div className="w-full max-w-[600px] h-[530px] p-8 bg-white rounded-lg mb-[40px]">
            <h1 className="text-2xl font-bold">{product_name}</h1>
            <p className="mt-2 text-gray-700">{description}</p>
            <p className="mt-2 text-gray-700">В наличии: {count} шт.</p>
            <p className="mt-2 text-gray-700">
              Страна производитель: {made_in}
            </p>
            <p className="mt-4 text-2xl font-bold">{cost} UZS / 1 шт.</p>
            <div className="flex gap-4 mt-4">
              <Link
                href="/basket"
                className="flex items-center gap-[4px] px-4 py-2 bg-yellow-400 text-black rounded-md"
                onClick={() => handleBasket(product.product_id)}
              >
                <Image src={cart} alt="cart" />
                Корзина
              </Link>
              <button className="flex items-center gap-[4px] px-4 py-2 border-2 border-yellow-400 text-yellow-400 rounded-md">
                <Image src={sliders} alt="slider" />
                Сравнить
              </button>
            </div>
            <div className="mt-[30px]">
              <button className="flex items-center gap-[4px] px-4 py-2 border-2 border-gray-300 rounded-md">
                <Image src={share} alt="share" />
                Поделиться
              </button>
            </div>
          </div>
        </div>
        <div className="mt-16 container pb-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Описание</h2>
            <h4 className="text-lg font-semibold">{product.product_name}</h4>
            <p className="text-bace mt-2 mb-6 text-orange-400">
              Oписание: {product.description}
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Цена:</h3>
                <p className="text-lg text-orange-400"> {product.cost} so'm</p>
              </li>
              <li className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Цвета:</h3>
                <p className="text-bace text-orange-400">{product.color}</p>
              </li>
              <li className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Возраст:</h3>
                <p className="text-bace text-orange-400">
                  {product.age_min} - {product.age_max} лет
                </p>
              </li>
              <li className="flex items-center gap-2">
                <h3 className="text-lg font-semibold">Производство:</h3>
                <p className="text-bace text-orange-400">{product.made_in}</p>
              </li>
            </ul>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-lg font-bold mb-4">Отзывы</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <Image
                  src={avatar}
                  alt="User avatar"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">Шахзод Анаров</p>
                  <p className="text-sm text-gray-600">Клиент</p>
                  <p className="text-sm text-gray-600 mt-1">
                    В составе томатов в большом количестве содержатся сахары,
                    ликопин, пектин, бета-каротин, витамины.
                  </p>
                  <div className="flex mt-2 text-yellow-500">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-400">★</span>
                  </div>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Image
                  src={avatar}
                  alt="User avatar"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div>
                  <p className="font-bold">Шахзод Анаров</p>
                  <p className="text-sm text-gray-600">Клиент</p>
                  <p className="text-sm text-gray-600 mt-1">
                    В составе томатов в большом количестве содержатся сахары,
                    ликопин, пектин, бета-каротин, витамины.
                  </p>
                  <div className="flex mt-2 text-yellow-500">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span className="text-gray-400">★</span>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="block mt-4 text-yellow-500">
              Все отзывы
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
