import React from "react";
import Image from "next/image";
import Eye from "@/public/image/Eye.png";
import galaxy from "@/public/image/galaxy.png";
import Astro from "@/public/image/Astro.png";
import Nebula from "@/public/image/nebula.png";

const Index = () => {
  return (
    <div className="bg-custom-gray">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between py-[160px] items-center text-center lg:text-left">
          <div>
            <h1 className="text-[38px] text-white">Discover More NFTs</h1>
            <p className="text-[22px] text-white pt-2">
              Explore new trending NFTs
            </p>
          </div>
          <div className="mt-6 lg:mt-0 flex justify-center lg:justify-end">
            <button
              className="bg-transparent text-white px-12 py-3 flex items-center justify-center gap-3 rounded-2xl border-2 border-[rgba(162,89,255,1)]"
              style={{
                borderRadius: "20px",
                width: "247px",
                height: "60px",
              }}
            >
              <Image src={Eye} alt="eye" className="mr-3" />
              <span className="text-base font-medium">See all</span>
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between gap-6">
          <div className="max-w-[330px] mx-auto sm:mx-0 rounded-[20px] overflow-hidden shadow-lg bg-second-gray text-white">
            <Image
              className="w-full"
              src={galaxy}
              alt="Distant Galaxy"
              width={400}
              height={300}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Distant Galaxy</div>
              <p className="text-gray-400 text-base">by MoonDancer</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2">
                Price
              </span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                1.63 ETH
              </span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2">
                Highest Bid
              </span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                0.33 wETH
              </span>
            </div>
          </div>
          <div className="max-w-[330px] mx-auto sm:mx-0 rounded-[20px] overflow-hidden shadow-lg bg-second-gray text-white">
            <Image
              className="w-full"
              src={Nebula}
              alt="Nebula"
              width={400}
              height={300}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Nebula</div>
              <p className="text-gray-400 text-base">by MoonDancer</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2">
                Price
              </span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                1.63 ETH
              </span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2">
                Highest Bid
              </span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                0.33 wETH
              </span>
            </div>
          </div>
          <div className="max-w-[330px] mx-auto sm:mx-0 rounded-[20px] overflow-hidden shadow-lg bg-second-gray text-white">
            <Image
              className="w-full"
              src={Astro}
              alt="Astro"
              width={400}
              height={300}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">Astro</div>
              <p className="text-gray-400 text-base">by MoonDancer</p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2">
                Price
              </span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                1.63 ETH
              </span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2 mb-2">
                Highest Bid
              </span>
              <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2">
                0.33 wETH
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
