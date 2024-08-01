import React from "react";
import Info from "@/components/info";
import Auction from "@/components/auction";
const Index = () => {
  return (
    <div className=" bg-custom-gray pb-[80px]">
      <div className="container">
        <h1 className="text-[32px] text-center lg:text-left leading-normal font-medium pt-[40px] pb-[30px]">
          Полезные информации
        </h1>
      </div>
      <div>
        <Info />
      </div>
      <Auction />
    </div>
  );
};

export default Index;
