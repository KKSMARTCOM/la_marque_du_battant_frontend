import Image from "next/image";
import Button from "@/components/Button";

export default function CollectionCard() {
  return (
    <div className="w-full h-[28rem] bg-gradient-to-t from-gray-400 to-gray-50 flex flex-col justify-center items-center relative">
      <div className="w-60 h-80 overflow-hidden">
        <Image
          src="/women-cloth.png"
          alt=""
          width={800}
          height={800}
          className="object-cover w-full h-full transition duration-700 ease-in-out transform hover:scale-110 cursor-pointer"
        />
      </div>
      <div>
        <h1 className="uppercase text-white text-center text-lg font-extrabold mt-2">
          Shine in black
        </h1>
        <Button title="Achetez maintenant" color="transparent" />
      </div>
    </div>
  );
}
