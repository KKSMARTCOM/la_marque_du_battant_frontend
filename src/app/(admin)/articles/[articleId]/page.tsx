import { productsData } from "@/lib/data";
import ProductForm from "@/components/admin/articles/ProductForm";
import Loader from "@/components/custom ui/Loader";
import React, { useState } from "react";

export default function ProductDetails({
  params,
}: {
  params: { articleId: string };
}) {
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState<ProductType | null>(
    null
  );

  return loading ? <Loader /> : <ProductForm initialData={productDetails} />;
}

export function generateStaticParams() {
  return productsData.map((item) => {
    item._id;
  });
}
