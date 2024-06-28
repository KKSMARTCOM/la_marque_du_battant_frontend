import Sliders from "@/components/articles/Sliders";

export default function NewArticles() {
  return (
    <div className="h-screen px-6 py-10">
      <small className="text-gray-400">Achetez les catégories</small>
      <div className="flex gap-2 items-center my-[20px]">
        <h1 className="font-bold text-xl">Articles en vedette</h1>
        <div className="h-2 w-2 bg-gray-400 rounded-full"></div>
        <select name="" id="">
          <option value="tous">Tous</option>
        </select>
      </div>
      <Sliders />
    </div>
  );
}
