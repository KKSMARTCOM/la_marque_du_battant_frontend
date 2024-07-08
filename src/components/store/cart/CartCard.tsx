import Image from "next/image";
import { BsDash, BsPlus, BsTrash } from "react-icons/bs";

export default function CartCard() {
  return (
    <div className="flex flex-col">
      <div className="flex gap-4 pt-2">
        <div className="w-40 h-[10rem] flex justify-center items-center bg-gray-100">
          <Image
            src="./pull.png"
            alt=""
            width={100}
            height={110}
            className="object-cover"
          />
        </div>
        <div>
          <p>T-shirt Basic</p>
          <small className="text-slate-400">Large</small>
          <p>$71.95</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4 pr-6">
        <div>
          <h1>Quantité</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-full w-40 hover:border-black">
            <BsDash className="w-6 h-6 cursor-pointer" />
            <p>1</p>
            <BsPlus className="w-6 h-6 cursor-pointer" />
          </div>
          <div className="p-2 cursor-pointer rounded-full border border-transparent hover:border hover:border-gray-200">
            <BsTrash className="w-6 h-6" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 pb-6 border-b border-black pr-6">
        <div>
          <h1>Taille</h1>
        </div>
        <div className="flex gap-2 items-center">
          <div className="flex justify-between items-center px-4 py-2 border border-gray-300 rounded-full w-[13rem] hover:border-black">
            <p>Changement</p>
            <span className="w-2 h-2 bg-black rounded-full"></span>
            <p>Large</p>
          </div>
        </div>
      </div>
    </div>
  );
}
