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

const SingleProductPage = () => {
  const [product, setProduct] = useState(null);

  const { id } = useParams();

  const getData = async () => {
    try {
      const { data } = await http.get(`/product/${id}`);
      setProduct(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const { product_name, description, made_in, count, cost, image_url } =
    product;

  return (
    <div className="p-4 md:p-8 bg-custom-gray">
      <div className="container">
        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row gap-[40px]  rounded-lg ">
          <div className=" w-full max-w-[600px] h-[530px] flex flex-col justify-center  items-center bg-white rounded-xl">
            <Carousel
              showArrows={true}
              showThumbs={false}
              showStatus={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              autoPlay={true}
              className=" w-[300px]  lg:w-[400px] rounded-xl overflow-hidden"
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
                    className="w-20 h-20 bg-white p-2 border-2  rounded-lg overflow-hidden"
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
          <div className=" w-full max-w-[600px] h-[530px] p-8 bg-white rounded-lg mb-[40px]">
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
      </div>
    </div>
  );
};

export default SingleProductPage;
