import AuthLayout from "@/components/auth/AuthLayout";
import FavorisCard from "@/components/store/products/FavorisCard";

export default function Favoris() {
  return (
    <AuthLayout>
      <div className="p-10">
        <h1 className="font-semibold text-xl py-4">Favoris</h1>
        <div className="grid grid-cols-3 max-lg:grid-cols-2">
          <FavorisCard />
          <FavorisCard />
          <FavorisCard />
        </div>
      </div>
    </AuthLayout>
  );
}
