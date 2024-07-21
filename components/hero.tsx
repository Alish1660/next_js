import Image from "next/image";
import Img1 from "@/public/image/Image1.png";
import Rocket from "@/public/image/RocketLaunch.png";
import Avatar from "@/public/image/Avatar.png";

export default function Home() {
  return (
    <main className="bg-custom-gray min-h-screen w-full">
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row md:items-center px-4 md:px-0 justify-between">
          <div className="text-center md:text-left md:max-w-[330px] lg:max-w-[510px]">
            <h1 className="font-work-sans text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight text-white">
              Discover digital art & Collect NFTs
            </h1>
            <p className="font-work-sans text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-white pt-5">
              NFT marketplace UI created with Anima for Figma. Collect, buy and
              sell art from more than 20k NFT artists.
            </p>
            <div className="flex justify-center md:justify-start mt-7">
              <button
                className="bg-custom-purple text-white px-6 py-2 flex items-center justify-center gap-4 sm:w-full md:w-[224px] md:h-[60px] rounded-2xl"
                style={{ borderRadius: "20px" }}
              >
                <Image src={Rocket} alt="Rocket" className="mr-3" />
                <span className="text-base font-medium">Get Started</span>
              </button>
            </div>
            <div className="flex justify-between  text-white mt-10 font-space-mono">
              <div className="flex flex-col ">
                <span className="text-xl font-semibold">240k+</span>
                <span className="text-base font-normal">Total Sale</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-xl font-semibold">100k+</span>
                <span className="text-base font-normal">Auctions</span>
              </div>
              <div className="flex flex-col ">
                <span className="text-xl font-semibold">240k+</span>
                <span className="text-base font-normal">Artists</span>
              </div>
            </div>
          </div>
          <div className="mt-10 md:mt-0 flex flex-col items-center md:items-end md:ml-8 lg:ml-12">
            <Image
              src={Img1}
              alt="Logo"
              className="w-full max-w-[315px] md:max-w-[330px] lg:max-w-[510px] rounded-tl-[20px] rounded-tr-[20px] rounded-bl-[0px] rounded-br-[0px]"
            />
            <div className="w-full max-w-[315px] md:max-w-[330px] lg:max-w-[510px] h-auto bg-second-gray opacity-100 rounded-bl-[20px] rounded-br-[20px] p-5 mt-0">
              <h1 className="text-white text-xl md:text-2xl">Space Walking</h1>
              <div className="flex items-center mt-5 gap-4">
                <span>
                  <Image
                    src={Avatar}
                    alt="avatar"
                    className="w-10 h-10 md:w-12 md:h-12 rounded-full"
                  />
                </span>
                <span className="text-white text-sm md:text-base">
                  Animakid
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
