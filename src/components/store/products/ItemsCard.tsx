import Image from "next/image";
import { getImagePath } from "@/utils/imagePath";

export default function ItemsCard() {
  return (
    <div className="w-60 flex flex-col relative overflow-hidden mt-4">
      <div className="w-full h-[18rem] cursor-pointer">
        <Image
          src={getImagePath("defaultImage.png")}
          alt="Product Image"
          width={500}
          height={500}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="leading-6 mt-2">
        <p></p>
        <small className="text-gray-400">
          {" "}
          <span>Quantité:</span>
        </small>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <small className="text-gray-400">
            {" "}
            <span>Taille:</span>
          </small>
        </div>
      </div>
    </div>
  );
}
