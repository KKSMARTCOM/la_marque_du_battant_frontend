"use client";
import Image from "next/image";
import { BsHeart } from "react-icons/bs";
import ProductDetailAccordion from "@/components/store/products/ProductDetailAccordion";
import ProductDetailCarrousel from "@/components/store/products/ProductDetailCarrousel";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useState } from "react";
import { fetchClient } from "../../../../../utils/fetchClient";
import toast from "react-hot-toast";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/store/products/ProductCard";
import CartModal from "@/components/store/cart/CartModal";
import Link from "next/link";
import { Loader } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getUserData } from "@/lib/auth";

export default function Product({ params }: any) {
  const router = useRouter();
  const [product, setProduct] = useState<any>({});
  const [sizes, setSizes] = useState<any>([]);
  const [images, setImages] = useState<any>([]);
  const [accessories, setAccessories] = useState<any>([]);
  const [featureProducts, setFeatureProducts] = useState<any>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [favLoading, setFavLoading] = useState(false);
  const { addToCart } = useCart();
  const [sizeSelected, setSizeSelected] = useState("");
  const [user, setUser] = useState<any>();
  const [favorite, setFavorite] = useState(false);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await fetchClient(`/products/${params.productId}`);
      if (res && res.success === true) {
        setLoading(false);
        setProduct(res.data);

        const size = JSON.parse(res.data.size);
        const images = JSON.parse(res.data.additional_images);

        setSizes(size);
        setImages(images);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      toast.error("Erreur interne du serveur.");
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchAccessories = async () => {
    setLoading(true);
    try {
      const res = await fetchClient(`/accessories`);
      if (res && res.success === true) {
        setLoading(false);
        setAccessories(res.data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      toast.error("Erreur interne du serveur.");
    }
  };

  const fetchFeaturesProducts = async (id: string) => {
    setLoading(true);
    try {
      const res = await fetchClient(`/features-products/${id}`);
      if (res && res.success === true) {
        setLoading(false);
        setFeatureProducts(res.data);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      toast.error("Erreur interne du serveur.");
    }
  };

  const addToFavorite = async () => {
    if (!user) {
      toast.success(
        "Veuillez vous connecter avant d'ajouter ce produit à vos favoris."
      );
      router.push("/auth/login");
    } else {
      setFavLoading(true);
      try {
        const res = await fetchClient(`/favorites/${params.productId}`, {
          method: "POST",
          body: { size_selected: sizeSelected },
        });
        if (res && res.success == true) {
          setFavLoading(false);
          toast.success(res.message);
          setFavorite(!favorite);
        }
      } catch (error) {
        setFavLoading(false);
        console.error("Erreur lors du chargement des produits:", error);
        toast.error("Erreur interne du serveur.");
      } finally {
        setFavLoading(false);
      }
    }
  };

  const getFavorites = async () => {
    try {
      const res = await fetchClient(`/favorites`);
      if (res && res.success == true) {
        const productFav = res.data.some((item: any) => {
          return item.product.id === params.productId;
        });

        if (productFav) {
          setFavorite(true);
        } else {
          setFavorite(false);
        }
      }
    } catch (error) {
      console.error("Erreur lors du chargement des produits:", error);
      toast.error("Erreur interne du serveur.");
    }
  };

  useEffect(() => {
    if (product && product.size) {
      const sizes = JSON.parse(product.size);
      if (sizes.length === 1) {
        setSizeSelected(sizes[0]); // Assigner automatiquement la première taille si une seule
      }
    }
  }, [product]);

  useEffect(() => {
    fetchProduct();
    fetchAccessories();
  }, [params.productId]);

  useEffect(() => {
    if (product.id) {
      fetchFeaturesProducts(product.id);
    }
  }, [product]);

  useEffect(() => {
    const userData = getUserData();
    if (userData) {
      setUser(JSON.parse(userData));
      getFavorites();
    }
  }, []);

  return loading ? (
    <div className="h-full w-full flex justify-center items-center">
      <Loader className="w-[100px] h-[100px]" />
    </div>
  ) : (
    <Fragment>
      {/* TOP */}
      <div className="w-full block md:flex gap-2 overflow-x-hidden mb-10 px-6">
        <div className="h-full w-full md:flex-1 custom-scroll">
          <div className="h-full">
            <Image
              src={product.main_image}
              alt="Main image"
              height={1000}
              width={800}
              className="object-cover h-full w-full"
            />
          </div>
        </div>
        <div className="w-full md:w-[35rem] px-4 pt-10">
          <h1 className="font-bold leading-10">{product.name}</h1>
          <small>{product.price} F cfa</small>
          {sizes.length > 1 ? (
            <div className="py-8 border-b border-gray-200">
              <p>Taille</p>
              <ul className="flex gap-2 pt-2">
                {sizes.map((item: string, index: number) => {
                  return (
                    <li
                      onClick={() => setSizeSelected(item)}
                      key={index}
                      className={`w-14 h-14 flex items-center justify-center cursor-pointer rounded-full border hover:border-black ${
                        sizeSelected == item ? "border-black" : ""
                      }`}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          ) : (
            <div className="py-8 border-b border-gray-200 capitalize">
              <p>Taille</p>
              <p className="pt-2">{sizes[0]}</p>
            </div>
          )}
          <div className="py-8 border-b border-gray-200">
            <Button
              onClick={() => {
                addToCart({
                  product: product,
                  sizeSelected: sizeSelected,
                });
                toast.success("Produit ajouté au panier !");
              }}
              disabled={!sizeSelected}
              className="bg-black text-nowrap rounded-full px-1 py-2 text-white w-full"
            >
              Ajouter au panier
            </Button>
            <div className="flex gap-4 mt-2">
              <Button
                className="px-6 py-2 border border-gray-200 rounded-full hover:border-black bg-transparent hover:bg-transparent"
                onClick={() => addToFavorite()}
                disabled={!sizeSelected}
              >
                {favLoading ? (
                  <Loader />
                ) : (
                  <BsHeart
                    className={`w-6 h-6 cursor-pointer text-black ${
                      favorite ? "text-red-500" : ""
                    }`}
                  />
                )}
              </Button>
              {/* <div className="flex-1 flex cursor-pointer justify-center py-2 border border-gray-200 rounded-full hover:border-black">
                Tableau des tailles
              </div> */}
            </div>
            <div className="pt-6">
              <small className="text-justify">{product.description}</small>
            </div>
          </div>
          <div className="px-12 py-8">
            <ProductDetailCarrousel />
          </div>
          <ProductDetailAccordion />
        </div>
      </div>
      {images && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
          {images.map((item: string, index: number) => {
            return (
              <div key={index} className="h-[600px]">
                <Image
                  src={item}
                  alt="Second image"
                  height={100}
                  width={100}
                  className="object-cover h-full w-full"
                />
              </div>
            );
          })}
        </div>
      )}
      {/* BOTTOM */}
      <div className="py-10 px-6">
        <h1 className="font-bold mb-6">Combinez avec</h1>
        {accessories && accessories.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {accessories.map((item: any, index: number) => {
              return (
                <Link href={`/products/${item.id}`} key={index}>
                  <ProductCard
                    product={item}
                    setOpen={setOpen}
                    setProduct={setProduct}
                  />
                </Link>
              );
            })}
          </div>
        ) : (
          <div>
            <h1>Pas d&apos;accessoires</h1>
          </div>
        )}
      </div>
      <div className="py-10 px-4">
        <h1 className="font-bold mb-6">Produits similaires</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {featureProducts.map((item: any, index: number) => {
            return (
              <Link href={`/products/${item.id}`} key={index}>
                <ProductCard
                  product={item}
                  setOpen={setOpen}
                  setProduct={setProduct}
                />
              </Link>
            );
          })}
        </div>
      </div>
      <CartModal open={open} setOpen={setOpen} product={product} />
    </Fragment>
  );
}
