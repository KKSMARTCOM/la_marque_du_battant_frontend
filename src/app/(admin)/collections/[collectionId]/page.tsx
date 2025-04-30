import { collectionsData } from "@/lib/data";
import Loader from "@/components/custom ui/Loader";
import CollectionForm from "@/components/admin/collections/CollectionForm";

export function generateStaticParams() {
  return collectionsData.map((item) => ({
    collectionId: `${item._id}`,
  }));
}

export default function CollectionDetails() {
  return <CollectionForm />;
}
