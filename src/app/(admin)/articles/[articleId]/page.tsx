import { productsData } from "@/lib/data";
import ProductForm from "@/components/admin/articles/ProductForm";
import Loader from "@/components/custom ui/Loader";
import React from "react";

export function generateStaticParams() {
  return productsData.map((item) => ({
    articleId: `${item._id}`,
  }));
}
export default function ProductDetails() {
  return <ProductForm />;
}
