"use client";
import Image from "next/image";
import React from "react";
import Collection1 from "@/public/image/collect1.png";
import Collection2 from "@/public/image/collect2.png";
import Collection3 from "@/public/image/collect3.png";
import Secondary1 from "@/public/image/Secondary1.png";
import Secondary2 from "@/public/image/Secondary2.png";
import Secondary3 from "@/public/image/Secondary3.png";
import Secondary4 from "@/public/image/Secondary4.png";
import Secondary5 from "@/public/image/Secondary5.png";
import Secondary6 from "@/public/image/Secondary6.png";
import Fox from "@/public/image/fox.png";
import Shrom from "@/public/image/shrum.png";
import Robo from "@/public/image/robo.png";

const collections = [
  {
    mainImg: Collection1,
    secondaryImgs: [Secondary1, Secondary2],
    title: "DSGN Animals",
    authorImg: Fox,
    author: "MrFox",
  },
  {
    mainImg: Collection2,
    secondaryImgs: [Secondary3, Secondary4],
    title: "Magic Mushrooms",
    authorImg: Shrom,
    author: "Shroomie",
  },
  {
    mainImg: Collection3,
    secondaryImgs: [Secondary5, Secondary6],
    title: "Disco Machines",
    authorImg: Robo,
    author: "BeKind2Robots",
  },
];

const Index = () => {
  return (
    <div className="bg-custom-gray py-10 pb-[160px]">
      <div className="container mx-auto px-4">
        <div className="font-work-sans">
          <h1 className="text-[38px] leading-10 text-white">
            Trending Collection
          </h1>
          <p className="pt-5 text-white pb-14">
            Checkout our weekly updated trending collection.
          </p>
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((collection, idx) => (
              <div
                key={idx}
                className={`${idx === 0 ? "block" : "hidden"} sm:${
                  idx < 2 ? "block" : "hidden"
                } md:block lg:block`}
              >
                <Image
                  src={collection.mainImg}
                  alt={collection.title}
                  className="w-full h-auto"
                />
                <div className="flex gap-4 mt-4">
                  {collection.secondaryImgs.map((img, idx) => (
                    <Image
                      key={idx}
                      src={img}
                      alt={`${collection.title} ${idx + 1}`}
                    />
                  ))}
                  <div className="flex items-center justify-center w-full rounded-[20px] max-w-[100px] h-[100px] bg-custom-purple font-space-mono text-white text-[22px]">
                    1025+
                  </div>
                </div>
                <div>
                  <h3 className="text-[22px] text-white pt-4">
                    {collection.title}
                  </h3>
                  <div className="flex gap-3 pt-[10px]">
                    <span>
                      <Image
                        src={collection.authorImg}
                        alt={collection.author}
                      />
                    </span>
                    <span className="text-[16px] text-white">
                      {collection.author}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
