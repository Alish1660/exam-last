import Calender from "@/public/images/calender.png";
import Eye from "@/public/images/eye.png";
import Image from "next/image";
const card = [
  {
    title: "Как правильно выбрать эллиптический тренажер?",
    descript:
      "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    calender: Calender,
    date: "27.01.2022",
    eye: Eye,
    watch: "250",
  },
  {
    title: "Как правильно выбрать эллиптический тренажер?",
    descript:
      "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    calender: Calender,
    date: "27.01.2022",
    eye: Eye,
    watch: "250",
  },
  {
    title: "Как правильно выбрать эллиптический тренажер?",
    descript:
      "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    calender: Calender,
    date: "27.01.2022",
    eye: Eye,
    watch: "250",
  },
  {
    title: "Как правильно выбрать эллиптический тренажер?",
    descript:
      "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    calender: Calender,
    date: "27.01.2022",
    eye: Eye,
    watch: "250",
  },
  {
    title: "Как правильно выбрать эллиптический тренажер?",
    descript:
      "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    calender: Calender,
    date: "27.01.2022",
    eye: Eye,
    watch: "250",
  },
  {
    title: "Как правильно выбрать эллиптический тренажер?",
    descript:
      "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    calender: Calender,
    date: "27.01.2022",
    eye: Eye,
    watch: "250",
  },
  {
    title: "Как правильно выбрать эллиптический тренажер?",
    descript:
      "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    calender: Calender,
    date: "27.01.2022",
    eye: Eye,
    watch: "250",
  },
  {
    title: "Как правильно выбрать эллиптический тренажер?",
    descript:
      "Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовкb Эллиптические тренажёры популярны среди людей любого возраста и с разным уровнем физической подготовки...",
    calender: Calender,
    date: "27.01.2022",
    eye: Eye,
    watch: "250",
  },
];

const list = card?.map((el, index) => (
  <div
    key={index}
    className=" w-full max-w-[590px] lg:max-w-[590px]  lg:h-[417px] bg-white rounded-[8px]  lg:p-0"
  >
    <h1 className="pt-4  lg:pt-[38px]  pl-[35px] w-full  max-w-[462px] text-[24px] lg:text-[32px] leading-normal font-medium">
      {el.title}
    </h1>
    <p className="pl-[35px] pt-2 w-full max-w-[454px] text-[16px] font-normal leading-6">
      {el.descript}
    </p>
    <div className="flex gap-[39px] pl-[35px] pt-[100px] pb-[20px]">
      <div className="flex items-center gap-[5px]">
        <Image src={el.calender} alt="" />
        <p className="text-[12px]">{el.date}</p>
      </div>
      <div className="flex items-center gap-[4px]">
        <Image src={el.eye} alt="" />
        <p className="text-[12px]">{el.watch}</p>
      </div>
    </div>
  </div>
));
const Index = () => {
  return (
    <div className="container">
      <div className="">
        <div className="grid justify-items-center grid-cols-1  lg:grid-cols-2 gap-[40px]">
          {list}
        </div>
      </div>
      <div className="flex justify-center sm:justify-center  lg:justify-start ">
        <button className=" py-4 px-10 border-2 border-yellow-400 mt-[30px]  rounded-md">
          Показать ещё
        </button>
      </div>
    </div>
  );
};

export default Index;
