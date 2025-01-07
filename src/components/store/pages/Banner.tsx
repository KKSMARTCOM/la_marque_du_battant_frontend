"use client";
import Image from "next/image";
import Link from "next/link";
import CustomWhiteButton from "../CustomWhiteButton";
import { useState } from "react";

export default function Banner() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="h-screen bg-slate-500">
      <Image
        src="./banner.jpg"
        width={800}
        height={800}
        alt=""
        className="w-full h-full object-cover"
      />
      <div className="absolute bottom-0 flex flex-col items-center w-full pb-10 text-white uppercase">
        <p>Jusqu&apos;à 50% de réduction</p>
        <h1 className="font-extrabold text-lg">Shine in black</h1>
        <div className="flex gap-6 mt-4">
          <Link href="/">
            <CustomWhiteButton title="Hommes" loading={loading} />
          </Link>
          <Link href="/">
            <CustomWhiteButton title="Femmes" loading={loading} />
          </Link>
        </div>
      </div>
    </div>
  );
}
