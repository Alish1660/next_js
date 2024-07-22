"use client";
import React, { useState, useEffect } from "react";
import rasm from "@/public/image/avatar1.png";
import Image from "next/image";
import Rocket from "@/public/image/Rocket2.png";

const card = [
  {
    id: "1",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "2",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "3",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "4",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "5",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "6",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "7",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "8",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "9",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "10",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "11",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
  {
    id: "12",
    title: "Keepitreal",
    sale: "Total Sales:",
    price: "34.53 ETH",
    img: rasm,
  },
];

const Index = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const displayCards = windowWidth < 756 ? card.slice(0, 6) : card;

  const list = displayCards?.map((el, inx) => (
    <div
      className="relative  bg-second-gray text-white rounded-lg shadow-lg p-4 mb-4 md:w-[330px] md:h-[100px] sm:w-[315px] sm:h-[100px] flex items-center lg:w-[240px] lg:h-[238px] mx-[15px]"
      key={el.id}
    >
      <span className="absolute top-2 left-2 bg-third-gray text-gray-300 text-xs px-2 py-1 rounded-full">
        {inx + 1}
      </span>
      <div className="flex-shrink-0">
        <Image
          src={el.img}
          alt="avatar1"
          className="w-24 h-24 object-cover rounded-full border-4 border-gray-800 md:w-16 md:h-16 sm:w-16 sm:h-16"
          width={96}
          height={96}
        />
      </div>
      <div className="ml-4 flex flex-col justify-center text-center">
        <h5 className="text-lg font-semibold">{el.title}</h5>
        <p className="text-gray-400 mt-2">
          {el.sale} <span className="text-white">{el.price}</span>
        </p>
      </div>
    </div>
  ));

  return (
    <div className="bg-custom-gray">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between text-center">
          <div>
            <h1 className="text-[38px] leading-10 text-white lg:text-start">
              Top creators
            </h1>
            <p className="text-[22px] text-white pt-[10px] pb-[60px]">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <div className=" mb-6 flex justify-center">
            <button
              className="bg-transparent text-white px-12 py-3 flex  items-center justify-center gap-3 rounded-2xl border-2 border-[rgba(162,89,255,1)]"
              style={{
                borderRadius: "20px",
                width: "247px",
                height: "60px",
              }}
            >
              <Image src={Rocket} alt="Rocket" className="mr-3" />
              <span className="text-base font-medium">View Rankings</span>
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-4 md:gap-y-6 lg:gap-y-8">
          {list}
        </div>
        <div className="flex justify-center">
          <div className="hidden lg:block mt-6"></div>
        </div>
      </div>
    </div>
  );
};

export default Index;
