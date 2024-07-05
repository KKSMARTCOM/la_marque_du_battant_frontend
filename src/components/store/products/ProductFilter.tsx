import { Checkbox } from "@/components/ui/checkbox";
import ProductAccordion from "./ProductAccordion";

export default function ProductFilter() {
  return (
    <div className="w-[14rem]">
      {/* Filter */}
      <h1 className="pb-2 text-xl border-b border-gray-200 font-bold">
        Filtres
      </h1>
      <ProductAccordion />
      <div className="flex flex-col gap-2 mt-2">
        <h1 className="text-xl font-bold">Tries</h1>
        <div className="flex gap-2 items-center text-[14px]">
          <Checkbox id="sort" />
          <label htmlFor="sort">Nouveautés</label>
        </div>
        <div className="flex gap-2 items-center text-[14px]">
          <Checkbox id="sort" />
          <label htmlFor="sort">Prix croissant</label>
        </div>
        <div className="flex gap-2 items-center text-[14px]">
          <Checkbox id="sort" />
          <label htmlFor="sort">Prix décroissant</label>
        </div>
        <div className="flex gap-2 items-center text-[14px]">
          <Checkbox id="sort" />
          <label htmlFor="sort">Les plus vendus</label>
        </div>
      </div>
    </div>
  );
}
