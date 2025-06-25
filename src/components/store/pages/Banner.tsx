"use client";
import Image from "next/image";
import Link from "next/link";
import CustomWhiteButton from "../CustomWhiteButton";
import { useState } from "react";
import { getImagePath } from "@/utils/imagePath";

export default function Banner() {
  const [loading, setLoading] = useState(false);

  const handleCategoryClick = (category: string) => {
    setLoading(true);
    // Navigation vers la page de catégorie
    window.location.href = `/category/${category.toLowerCase()}`;
  };

  return (
    <section
      className="relative w-full bg-slate-500"
      style={{ minHeight: '220px' }}
      role="banner"
      aria-label="Bannière principale"
    >
      <div className="w-full h-[65vw] sm:h-[450px] md:h-[500px] lg:h-[550px] relative  overflow-hidden">
      <Image
        src={getImagePath("banner.jpg")}
        width={1920}
        height={1080}
        alt="Bannière La Marque du Battant - Collection exclusive"
        className="w-full h-full object-cover"
        priority
        quality={85}
      />
      <div 
        className="absolute bg-black opacity-60 top-0 left-0 h-full w-full z-0"
        aria-hidden="true"
      />
      <div className="absolute bottom-0 flex flex-col items-center w-full pb-10 text-white uppercase z-10">
        <p className="text-lg font-medium mb-2">Jusqu&apos;à 50% de réduction</p>
        <h1 className="font-extrabold text-3xl md:text-4xl mb-6">Shine in black</h1>
        <div className="flex flex-col sm:flex-row gap-4">
          <button
            onClick={() => handleCategoryClick('hommes')}
            disabled={loading}
            className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors disabled:opacity-50"
            aria-label="Voir la collection Hommes"
          >
            {loading ? "Chargement..." : "Hommes"}
          </button>
          <button
            onClick={() => handleCategoryClick('femmes')}
            disabled={loading}
            className="px-8 py-3 bg-white text-black font-semibold rounded hover:bg-gray-100 transition-colors disabled:opacity-50"
            aria-label="Voir la collection Femmes"
          >
            {loading ? "Chargement..." : "Femmes"}
          </button>
        </div>
      </div>
      </div>
    </section>
  );
}
