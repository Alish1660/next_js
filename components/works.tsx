import React from "react";
import Image from "next/image";
import Icon from "@/public/image/Ico1.png";
import Icon2 from "@/public/image/Ico2.png";
import Icon3 from "@/public/image/Ico3.png";

const Index = () => {
  return (
    <div className="bg-custom-gray pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="text-center lg:text-start">
          <h1 className="text-white text-4xl pb-2">How it works</h1>
          <p className="text-white text-2xl">Find out how to get started</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-5 mt-10 lg:flex lg:gap-[60px]">
          <div className="card w-full h-auto bg-second-gray rounded-2xl p-4 flex flex-col items-center sm:flex-row sm:items-start sm:text-right lg:h-[439px] lg:flex-col lg:items-center">
            <Image
              src={Icon}
              alt="Icon"
              width={250}
              height={250}
              className="sm:w-16 sm:h-16 lg:w-[250px] lg:h-[250px] sm:mr-4 lg:mr-0"
            />
            <div className="mt-4 sm:mt-0 sm:text-left lg:text-center">
              <h3 className="text-white text-lg font-bold mb-2">
                Setup Your wallet
              </h3>
              <p className="text-white text-sm">
                Set up your wallet of choice. Connect it to the NFT market by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
          <div className="card w-full h-auto bg-second-gray rounded-2xl p-4 flex flex-col items-center sm:flex-row sm:items-start sm:text-right lg:h-[439px] lg:flex-col lg:items-center">
            <Image
              src={Icon2}
              alt="Icon"
              width={250}
              height={250}
              className="sm:w-16 sm:h-16 lg:w-[250px] lg:h-[250px] sm:mr-4 lg:mr-0"
            />
            <div className="mt-4 sm:mt-0 sm:text-left lg:text-center">
              <h3 className="text-white text-lg font-bold mb-2">
                Setup Your wallet
              </h3>
              <p className="text-white text-sm">
                Set up your wallet of choice. Connect it to the NFT market by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
          <div className="card w-full h-auto bg-second-gray rounded-2xl p-4 flex flex-col items-center sm:flex-row sm:items-start sm:text-right lg:h-[439px] lg:flex-col lg:items-center">
            <Image
              src={Icon3}
              alt="Icon"
              width={250}
              height={250}
              className="sm:w-16 sm:h-16 lg:w-[250px] lg:h-[250px] sm:mr-4 lg:mr-0"
            />
            <div className="mt-4 sm:mt-0 sm:text-left lg:text-center">
              <h3 className="text-white text-lg font-bold mb-2">
                Setup Your wallet
              </h3>
              <p className="text-white text-sm">
                Set up your wallet of choice. Connect it to the NFT market by
                clicking the wallet icon in the top right corner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
