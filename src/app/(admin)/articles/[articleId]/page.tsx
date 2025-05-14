"use client";

import ProductForm from "@/components/admin/articles/ProductForm";
import Loader from "@/components/custom ui/Loader";
import React, { useEffect, useState } from "react";
import { fetchClient } from "../../../../../utils/fetchClient";
import toast from "react-hot-toast";

/* export function generateStaticParams() {
  return productsData.map((item) => ({
    articleId: `${item.id}`,
  }));
} */

export default function ArticleDetails({ params }: any) {
  const [product, setProduct] = useState<ProductType | any>({});

  const fetchProduct = async () => {
    try {
      const res = await fetchClient(`/products/${params.articleId}`);
      if (res && res.success == true) {
        setProduct(res.data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Erreur survenue au niveau du serveur ! Veuillez réessayer.");
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return <ProductForm initialData={product} />;
}
