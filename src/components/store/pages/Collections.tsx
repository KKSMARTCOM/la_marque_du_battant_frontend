"use client";
import CollectionCard from "@/components/store/pages/CollectionCard";
import { useState } from "react";
import { collectionsData } from "@/lib/data";

export default function CollectionLists() {
  const [collections, setCollections] = useState(collectionsData);

  return (
    <div className="px-6 py-10">
      <small className="text-gray-400">Découvrez</small>
      <h1 className="font-bold text-3xl text-black py-[20px] mb-4">Nos collections</h1>
      {collections && collections.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {collections.map((item, index) => {
            return <CollectionCard key={index} collection={item} />;
          })}
        </div>
      ) : (
        <div>
          <h1>Aucune collection pour le moment</h1>
        </div>
      )}
    </div>
  );
}
