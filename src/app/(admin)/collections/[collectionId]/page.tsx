"use client";

import Loader from "@/components/custom ui/Loader";
import CollectionForm from "@/components/admin/collections/CollectionForm";
import { useEffect, useState } from "react";
import { fetchClient } from "../../../../../utils/fetchClient";
import toast from "react-hot-toast";

/* export function generateStaticParams() {
  return collectionsData.map((item) => ({
    collectionId: `${item.id}`,
  }));
} */

export default function CollectionDetails({ params }: any) {
  const [collection, setCollection] = useState<CollectionType>();

  const fetchCollection = async () => {
    try {
      const res = await fetchClient(`/collections/${params.collectionId}`);

      if (res) {
        setCollection(res.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    }
  };

  useEffect(() => {
    fetchCollection();
  }, []);

  return <CollectionForm initialData={collection} />;
}
