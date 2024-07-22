import Head from "next/head";
import Image from "next/image";
import Photo from "@/public/image/Photo1.png";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gray">
      <Head>
        <title>Subscribe Card</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className="flex flex-col md:flex-row bg-second-gray text-white rounded-lg shadow-lg overflow-hidden"
        style={{ width: "90%", maxWidth: "1050px", height: "430px" }}
      >
        <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-0">
          <Image src={Photo} alt="photo" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-6 md:p-12">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
            Join Our Weekly Digest
          </h2>
          <p className="text-lg mb-8 text-center">
            Get Exclusive Promotions & Updates Straight To Your Inbox.
          </p>
          <div className="w-full flex flex-col md:flex-row">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-grow p-3 mb-4 md:mb-0 md:mr-2 rounded-lg border border-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
            <button className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
