import React from "react";
import Image from "next/image";
import Category1 from "@/public/image/Category1.png";
import Category2 from "@/public/image/Category2.png";
import Category3 from "@/public/image/Category3.png";
import Category4 from "@/public/image/Category4.png";
import Category5 from "@/public/image/Category5.png";
import Category6 from "@/public/image/Category6.png";
import Category7 from "@/public/image/Category7.png";
import Category8 from "@/public/image/Category8.png";

const card = [
  {
    title: "Art",
    img: Category1,
  },
  {
    title: "Collectibles",
    img: Category2,
  },
  {
    title: "Music",
    img: Category3,
  },
  {
    title: "Photography",
    img: Category4,
  },
  {
    title: "Video",
    img: Category5,
  },
  {
    title: "Utility",
    img: Category6,
  },
  {
    title: "Sport",
    img: Category7,
  },
  {
    title: "Virtual Worlds",
    img: Category8,
  },
];

const list = card?.map((el, inx) => (
  <div
    className="relative max-w-xs mx-auto sm:w-[150px]   lg:w-[240px] bg-second-gray text-white rounded-[20px] shadow-lg overflow-hidden"
    key={inx}
  >
    <Image
      src={el.img}
      alt={el.title}
      className="w-full h-[240px] md:h-[200px] lg:h-[240px] object-cover"
      width={175}
      height={175}
    />
    <div className="p-2 bg-dark-gray flex items-center pl-5 h-[76px] text-[22px] font-work-sans">
      <h5 className="text-white text-sm">{el.title}</h5>
    </div>
  </div>
));

const Index = () => {
  return (
    <div className="bg-custom-gray">
      <div className="container mx-auto px-4">
        <h1 className="text-[38px] py-[160px] text-white leading-10 font-semibold">
          Browse Categories
        </h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-4 md:gap-y-6 lg:gap-y-8">
          {list}
        </div>
      </div>
    </div>
  );
};

export default Index;
