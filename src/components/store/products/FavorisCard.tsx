import Link from "next/link";
import Image from "next/image";
import { Trash2 } from "lucide-react";

export default function FavorisCard() {
  return (
    <div className="w-60 flex flex-col relative overflow-hidden mt-4">
      <div className="w-full h-[18rem] cursor-pointer">
        <Image
          src="/t-shirt.png"
          alt=""
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="leading-6 mt-2">
        <p>T-shirt</p>
        <small className="text-gray-400">€159.95</small>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <small className="text-gray-400">Large</small>
          <small className="underline">
            <Link href="">Changement</Link>
          </small>
        </div>
        <Trash2 className="w-10 h-10 rounded-full p-2 cursor-pointer border border-gray-200" />
      </div>
      <div className="mt-2">
        <button className="px-8 py-2 w-full text-black border transition-transform duration-700 ease-in-out border-gray-200 hover:border-black rounded-full">
          Ajouter au panier
        </button>
      </div>
    </div>
  );
}
