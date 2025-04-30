"use client";
import CollectionCard from "@/components/store/pages/CollectionCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { fetchClient } from "../../../../utils/fetchClient";

export default function Collections() {
  const [collections, setCollections] = useState([]);

  const fetchCollections = async () => {
    try {
      const res = await fetchClient("/collections");
      if (res && res.success === true) {
        setCollections(res.data);
        console.log(res.data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      toast.error("Erreur interne du serveur.");
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  return (
    <div className="px-6 py-10">
      <small className="text-gray-400">Découvrez</small>
      <h1 className="font-bold text-xl py-[20px]">Nos collections</h1>
      {collections && collections.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {collections.map((item, index) => {
            return <CollectionCard key={index} collection={item} />;
          })}
          {/* <CollectionCard />
          <CollectionCard />
          <CollectionCard />
          <CollectionCard /> */}
        </div>
      ) : (
        <div>
          <h1>Aucune collection pour le moment</h1>
        </div>
      )}
    </div>
  );
}
