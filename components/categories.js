import Image from "next/image";
import Category1 from "@/public/images/category.png";
import Category2 from "@/public/images/category2.png";
import Category3 from "@/public/images/category3.png";
import Category4 from "@/public/images/category4.png";
import Category5 from "@/public/images/category5.png";
import Category6 from "@/public/images/category6.png";

const card = [
  {
    title: "Тренажеры",
    img: Category1,
  },
  {
    title: "Мячи",
    img: Category2,
  },
  {
    title: "Спротивные обуви",
    img: Category3,
  },
  {
    title: "Спортивные одежды",
    img: Category4,
  },
  {
    title: "Водный спорт",
    img: Category5,
  },
  {
    title: "Горный спорт",
    img: Category6,
  },
];

const bgColors = [
  "bg-red-200",
  "bg-green-200",
  "bg-blue-200",
  "bg-yellow-200",
  "bg-purple-200",
  "bg-pink-200",
];

const list = card?.map((el, index) => (
  <div
    key={index}
    className={`flex flex-col items-center cursor-pointer p-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-95 hover:shadow-lg ${
      bgColors[index % bgColors.length]
    } w-[187px] h-[247px]`}
  >
    <h5 className="text-center font-semibold">{el.title}</h5>
    <Image
      src={el.img}
      alt={el.title}
      width={100}
      height={100}
      className="pt-[90px] rounded-md"
    />
  </div>
));

export default function Home() {
  return (
    <main>
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="grid grid-cols-2 items-center sm:grid-cols-3 sm:justify-center lg:grid-cols-6 gap-4">
            {list}
          </div>
        </div>
      </div>
    </main>
  );
}
