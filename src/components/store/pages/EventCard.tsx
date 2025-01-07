import Image from "next/image";
import { Fragment } from "react";

export default function EventCard() {
  return (
    <div>
      <div className="w-full h-[24rem] overflow-hidden">
        <Image
          src="./citation.jpg"
          width={800}
          height={800}
          alt=""
          className="w-full h-full object-cover transition duration-700 ease-in-out transform hover:scale-105"
        />
      </div>
      <div className="flex pt-4 justify-between">
        <div className="leading-6 ">
          <small className="text-gray-400">A la rencontre des battants</small>
          <h1 className="font-bold text-xl">Cotonou</h1>
        </div>
        <div>
          <button className="px-8 text-nowrap py-2 border border-gray-200 text-black rounded-full hover:border hover:border-black">
            Je participe
          </button>
        </div>
      </div>
    </div>
  );
}
