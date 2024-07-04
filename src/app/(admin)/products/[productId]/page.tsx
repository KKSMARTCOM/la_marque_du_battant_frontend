"use client";

import ProductForm from "@/components/admin/products/ProductForm";
import Loader from "@/components/custom ui/Loader";
import React, { useState } from "react";

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const [loading, setLoading] = useState(true);
  const [productDetails, setProductDetails] = useState<ProductType | null>(
    null
  );

  return loading ? <Loader /> : <ProductForm initialData={productDetails} />;
}
