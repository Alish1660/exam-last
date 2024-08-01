import Line from "@/public/images/line.png";
import Image from "next/image";
import Auction from "@/components/auction";
const Index = () => {
  return (
    <div className="bg-custom-gray font-Fira-sans">
      <div className="pb-[80px]">
        <div className=" container">
          <div className="flex flex-col items-center lg:items-start sm:flex-col lg:flex-row gap-[24px] pt-[79px]">
            <div className=" w-[400px]  lg:w-[187px] h-[256px] pt-[18px] pl-2 bg-white rounded-md">
              <div className="flex justify-start gap-1 pl-[8px]">
                <Image src={Line} alt="line" />
                <h1 className=" text-[16px] font-normal leading-normal">
                  О нас
                </h1>
              </div>
              <h1 className="text-center text-[16px] font-normal leading-normal pt-[8px]">
                Вканация
              </h1>
            </div>
            <div className=" w-full max-w-[714px] h-auto-[677px] pl-[50px] pr-[66px] bg-white rounded-md">
              <h1 className="text-[24px] font-medium leading-normal pt-[42px] pb-[17px]">
                7 SPORT MARKET
              </h1>
              <p className="text-[16px] leading-5  ">
                В составе томатов в большом количестве содержатся сахара,
                клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9,
                С, К, Н и РР, а также нужные организму человека.
              </p>
              <p className=" pt-[4px] sm:pt-[20px] lg:pt-[29px] ">
                Овощи содержат в себе много полезных витаминов, которые
                укрепляют здоровье и иммунитет и являются необходимым
                компонентом в рационе человека. Тепличный помидор - всегда
                доступен для вас и в сети супермаркетов “Makro” вы всегда можете
                найти его по выгодной цене и заказать их с доставкой в Ташкенте.
              </p>
              <p className="pt-[29px] ">
                В составе томатов в большом количестве содержатся сахара,
                клетчатка, пектины, бета-каротин, витамины В1, В2, В5, В6, В9,
                С, К, Н и РР, а также нужные организму человека.
              </p>
              <p className="pt-[29px] pb-[50px] ">
                Овощи содержат в себе много полезных витаминов, которые
                укрепляют здоровье и иммунитет и являются необходимым
                компонентом в рационе человека. Тепличный помидор - всегда
                доступен для вас и в сети супермаркетов “Makro” вы всегда можете
                найти его по выгодной цене и заказать их с доставкой в Ташкенте.
              </p>
            </div>
          </div>
        </div>
        <Auction />
      </div>
    </div>
  );
};

export default Index;
