"use client";

import { useState } from "react";
import Loader from "@/components/custom ui/Loader";
import CollectionForm from "@/components/admin/collections/CollectionForm";

export default function CollectionDetails({
  params,
}: {
  params: { collectionId: string };
}) {
  const [loading, setLoading] = useState(false);
  const [collectionDetails, setCollectionDetails] =
    useState<CollectionType | null>(null);

  return loading ? (
    <Loader />
  ) : (
    <CollectionForm initialData={collectionDetails} />
  );
}
