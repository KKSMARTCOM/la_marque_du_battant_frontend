import Image from "next/image";

export default function Card({
  img,
  name,
  price,
}: {
  img: string;
  name: string;
  price: number;
}) {
  return (
    <div className="w-full">
      <div className="w-full h-80 bg-gray-100 flex flex-col justify-center items-center relative">
        <div className="absolute top-0 left-0 p-2">
          <small className="py-1 px-2 bg-white rounded-full cursor-grab">
            Nouveau
          </small>
        </div>

        <Image
          src={img}
          alt=""
          width={150}
          height={150}
          className="object-cover transition duration-700 ease-in-out transform hover:scale-150 cursor-pointer"
        />
        <div className="absolute bottom-[15px]">
          <div className="flex w-full px-6">
            <ul className="bg-white w-2/3 rounded-full px-4 py-2 flex gap-4">
              <li>XS</li>
              <li>M</li>
              <li>S</li>
              <li>L</li>
              <li>...</li>
            </ul>
            <button className="bg-black text-nowrap rounded-full px-1 py-2 text-white">
              Vue rapide
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>{name}</p>
        <small className="text-slate-400">${price}</small>
      </div>
    </div>
  );
}
