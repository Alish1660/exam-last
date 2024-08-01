"use client";
import React, { useState } from "react";
import Image from "next/image";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Imge from "@/public/images/pnge.png";
import click from "@/public/images/click.png";
import payme from "@/public/images/payme.png";

const productData = [
  {
    id: 1,
    name: "Гантель виниловая, 2 х 3 кг Гантель",
    pricePerUnit: 300000,
    image: Imge,
  },
  {
    id: 2,
    name: "Гантель виниловая, 2 х 3 кг Гантель",
    pricePerUnit: 150000,
    image: Imge,
  },
  {
    id: 3,
    name: "Гантель виниловая, 2 х 3 кг Гантель",
    pricePerUnit: 300000,
    image: Imge,
  },
  {
    id: 4,
    name: "Гантель виниловая, 2 х 3 кг Гантель",
    pricePerUnit: 150000,
    image: Imge,
  },
];

const ProductCard = () => {
  const [products, setProducts] = useState(productData);

  const incrementCount = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, count: (product.count || 0) + 1 }
          : product
      )
    );
  };

  const decrementCount = (id) => {
    setProducts(
      products.map((product) =>
        product.id === id && product.count > 0
          ? { ...product, count: product.count - 1 }
          : product
      )
    );
  };

  const deleteCard = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <div className="bg-custom-gray p-[50px]">
      <div className="container mx-auto">
        <div className="flex flex-col gap-[40px] items-center sm:flex-col lg:flex-row">
          <div className="w-full max-w-[713px] h-auto rounded-lg bg-white p-4">
            <div className="flex justify-between items-center pt-[20px] pb-[15px]">
              <h1 className="text-xl font-bold mb-4">Ваша корзина</h1>
              <button onClick={() => setProducts([])} className="text-red-500">
                Очистить все
              </button>
            </div>
            <div className="grid grid-cols-1 gap-4 ">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="font-Fira-sans max-w-[655px] h[140px] flex border rounded-lg overflow-hidden p-4 bg-custom-gray relative mb-4"
                >
                  <button
                    onClick={() => deleteCard(product.id)}
                    className="absolute flex justify-center text-red-500 items-center top-2 right-2 w-[32px] h-[32px] rounded-[50%] bg-white"
                  >
                    <DeleteOutlineOutlinedIcon />
                  </button>
                  <div className=" flex flex-col sm:flex-col lg:flex-row">
                    <div className="w-[145px] h-[120px] flex-shrink-0 mr-4">
                      <Image
                        src={product.image}
                        alt={product.name}
                        width={145}
                        height={120}
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="font-bold text-xl mb-2">
                        <h1 className=" w-[200px] sm:w-[250px] lg:w-[292px] text-[22px] font-normal leading-normal">
                          {product.name}
                        </h1>
                      </div>
                      <div className="flex items-center gap-[6px]">
                        <button
                          onClick={() => decrementCount(product.id)}
                          className="flex justify-center bg-white items-center border w-[32px] h-[32px] font-bold rounded-[50%]"
                        >
                          -
                        </button>
                        <span>{product.count || 0}</span>
                        <button
                          onClick={() => incrementCount(product.id)}
                          className="flex justify-center bg-white items-center border w-[32px] h-[32px] font-bold rounded-[50%]"
                        >
                          +
                        </button>
                        <span className="pl-[20px] text-[22px] font-bold">
                          {(
                            (product.count || 0) * product.pricePerUnit
                          ).toLocaleString()}{" "}
                          uzs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <h3 className="pt-[15px] pb-[15px]">Все информация о доставке</h3>
            <p className="max-w-[384px]">
              Если у вас имеется вопросы позвоните по номеру:+998 (99) 995 55 65{" "}
            </p>
          </div>
          <div className=" w-full max-w-[504px] h-[800px] mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-6">
              <div className="text-lg font-semibold mb-2">Итого</div>
              <div className="flex justify-between mb-4">
                <span>Кол-во товаров:</span>
                <span>4</span>
              </div>
              <div className="flex justify-between mb-6">
                <span>Сумма:</span>
                <span className="font-semibold">250 000 UZS</span>
              </div>
              <div className="text-lg font-semibold mb-2">Ваши данные</div>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Имя / Фамилия
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Имя / Фамилия"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Ваш номер
                  </label>
                  <input
                    id="phone"
                    type="text"
                    placeholder="+998 _ _ _ _ _ _ _"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="address"
                  >
                    Адрес доставки
                  </label>
                  <div className="relative">
                    <input
                      id="address"
                      type="text"
                      placeholder="Область/город/улица/дом"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0 mt-2 mr-2 text-yellow-500"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="text-lg font-semibold mb-2">Тип оплаты</div>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    <Image src={click} alt="click" />
                  </button>
                  <button
                    type="button"
                    className=" flex justify-center items-center px-[25px] py-[17px] text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    <Image
                      src={payme}
                      alt="payme"
                      className="w-[80px] h-[38px]"
                    />
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    Через карту
                  </button>
                  <button
                    type="button"
                    className="px-3 py-2 text-sm font-semibold text-gray-700 border rounded-lg focus:outline-none"
                  >
                    Банковский счёт
                  </button>
                </div>
                <button
                  type="submit"
                  className=" w-full px-[40px] py-[20px] mt-[50px] text-white bg-yellow-500 rounded-lg font-semibold"
                >
                  Купить
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
