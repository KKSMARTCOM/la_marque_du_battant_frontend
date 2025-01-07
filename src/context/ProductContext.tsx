"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { fetchClient } from "../../utils/fetchClient";
import toast from "react-hot-toast";

type ProductContextType = {
  products: ProductType[];
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [products, setProducts] = useState<ProductType[]>([]);

  const getProducts = async () => {
    try {
      const res = await fetchClient("/api/products");
      if (res && res.data) {
        setProducts(res.data);
      }
    } catch (error) {
      toast.error("Erreur interne du serveur !");
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useCart doit être utilisé dans un CartProvider");
  }
  return context;
};
