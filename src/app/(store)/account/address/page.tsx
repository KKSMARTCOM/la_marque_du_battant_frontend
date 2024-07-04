import Button from "@/components/store/Button";

export default function Address() {
  return (
    <div className="py-10">
      <div className="flex px-10 justify-between items-center py-4 border-b border-gray-200">
        <h1 className="font-semibold text-xl ">Adresses</h1>
        <div>
          <Button title="Ajouter une nouvelle adresse" color="white" />
        </div>
      </div>
    </div>
  );
}
