import React from "react";
import Image from "next/image";
import Img from "@/public/images/png.png";

const Index = () => {
  return (
    <div className="bg-custom-gray font-Fira-sans">
      <div className="container mx-auto px-4">
        <h1 className="text-[24px] sm:text-[32px] text-center py-10 lg:text-left lg:text-4xl font-medium leading-normal">
          Полезное
        </h1>
        <div className="flex flex-col lg:flex-row justify-between lg:space-x-4 space-y-4 lg:space-y-0">
          <div className="card w-full max-w-full lg:max-w-[590px] h-auto lg:h-[417px] bg-white rounded-[8px] p-4 lg:p-0">
            <h1 className="pt-4 lg:pt-[38px] pl-0 lg:pl-[35px] w-full max-w-full lg:max-w-[462px] text-[24px] lg:text-[32px] leading-normal font-medium">
              Как правильно выбрать эллиптический тренажер?
            </h1>
            <p className="pl-0 lg:pl-[35px] pt-2 w-full max-w-full lg:max-w-[454px] text-[16px] font-normal leading-6">
              Эллиптические тренажёры популярны среди людей любого возраста и с
              разным уровнем физической подготовки Эллиптические тренажёры
              популярны среди людей любого возраста и с разным уровнем
              физической подготовки...
            </p>
          </div>
          <div className="w-full flex flex-col items-center">
            <div className="w-full max-w-full lg:max-w-[590px] h-[350px] sm:h-[300px] lg:h-[350px] bg-white rounded-[8px] flex justify-center">
              <Image src={Img} alt="Image" />
            </div>
            <button className="w-full max-w-full lg:max-w-[590px] bg-white rounded-[8px] text-[16px] h-[52px] mt-[15px] leading-[22px] font-normal">
              Посмотреть все
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
