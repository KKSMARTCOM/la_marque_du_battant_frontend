import CollectionCard from "@/components/CollectionCard";

export default function Collections() {
  return (
    <div className="px-6 py-10">
      <small className="text-gray-400">Découvrez</small>
      <h1 className="font-bold text-xl py-[20px]">Nos collections</h1>
      <div className="grid grid-cols-3 gap-4">
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
        <CollectionCard />
      </div>
    </div>
  );
}
