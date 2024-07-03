"use client";
import Image from "next/image";
import Link from "next/link";

export default function ProductCard({
  product,
}: {
  product: { image: string; name: string; price: number };
}) {
  return (
    <div className="w-full">
      <div className="w-full h-80 bg-gray-100 flex flex-col justify-center items-center cursor-pointer relative group overflow-hidden">
        <div className="absolute top-0 left-0 p-2">
          <small className="py-1 px-2 bg-white rounded-full cursor-grab">
            Nouveau
          </small>
        </div>

        <Image
          src={`${product.image}`}
          alt=""
          width={150}
          height={150}
          className="object-cover transition duration-700 ease-in-out transform hover:scale-150 cursor-pointer"
        />
        <div className="absolute bottom-[15px] hidden group-hover:block">
          <div className="flex w-full px-6">
            <ul className="bg-white flex-1 rounded-full px-4 py-2 flex gap-4">
              <Link href="">
                <li>XS</li>
              </Link>
              <Link href="">
                <li>M</li>
              </Link>
              <Link href="">
                <li>S</li>
              </Link>
              <Link href="">
                <li>L</li>
              </Link>
              <Link href="">
                <li>...</li>
              </Link>
            </ul>
            <button className="bg-black text-nowrap rounded-full px-1 py-2 text-white">
              Vue rapide
            </button>
          </div>
        </div>
      </div>
      <div>
        <p>{product.name}</p>
        <small className="text-slate-400">${product.price}</small>
      </div>
    </div>
  );
}
