import Line from "@/public/images/line.png";
import Image from "next/image";
import Auction from "@/components/auction";
const Index = () => {
  return (
    <div className="bg-custom-gray font-Fira-sans">
      <div className="pb-[80px]">
        <div className=" container">
          <div className="flex flex-col items-center lg:items-start sm:flex-col lg:flex-row gap-[24px] pt-[79px]">
            <div className="  w-[400px]  lg:w-[187px] h-[256px] pt-[18px] pl-2 bg-white rounded-md">
              <div className="flex justify-start gap-1 pl-[8px]">
                <Image src={Line} alt="line" />
                <h1 className=" text-[16px] font-normal leading-normal">
                  Оплата и Доставка{" "}
                </h1>
              </div>
              <h1 className="text-center text-[16px] font-normal leading-normal pt-[8px]"></h1>
            </div>
            <div className=" w-full max-w-[714px] h-auto-[677px] pl-[50px] pr-[66px] bg-white rounded-md">
              <h1 className="text-[24px] font-medium leading-normal pt-[42px] pb-[17px]">
                Способы оплаты
              </h1>
              <p className="text-[16px] leading-5  ">
                Для того, чтобы оплатить товар, Вам нужно перейти в «Корзину» и
                выбрать тот товар, который Вы хотите купить.
              </p>
              <p className=" pt-[4px] sm:pt-[20px] lg:pt-[29px] ">
                После перехода в Корзину, откроется список товаров, которые Вы
                добавили. Далее, нажимаем кнопку «Оформить заказ». В окне,
                появится «Контактная информация» и «Способы доставки», которые
                Вам не обходимо заполнить.
              </p>
              <p className="pt-[29px] ">
                Вы можете выбрать более подходящий для Вас способ оплаты:
                -Оплата на месте; -Оплата по терминалу; -Оплата через платёжные
                системы, такие как CLICK, Payme.
              </p>
              <p className="pt-[29px] pb-[50px] ">
                Оплатить покупки можно наличными при получении. Убедительная
                просьба вначале ознакомиться с товаром, убедиться в отсутствии
                дефектов в присутствии курьера, после чего оплачивать сумму.
              </p>
              <h1 className="text-[24px] font-medium leading-normal pt-[42px] pb-[17px]">
                Доставка
              </h1>
              <p>Тарифы на доставку товаров по Ташкенту:</p>
              <p className="pt-[20px]">
                -20.000 сум для товаров до 150.000 сум -Бесплатная доставка для
                всех товаров от 150.000 сум
              </p>
              <p className="pt-[20px] pb-[50px]">
                Тарифы на доставку товаров по всех регионов: -Платная доставка
                для всех товаров по согласованной цене -Бесплатная установка для
                всех тренажеров
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
