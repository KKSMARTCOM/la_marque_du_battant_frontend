"use client";
import ProductCard from "@/components/store/products/ProductCard";
import NextArrow from "@/components/store/products/NextArrow";
import PrevArrow from "@/components/store/products/PrevArrow";
import { products } from "@/data";

import Slider from "react-slick";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Sliders() {
  //const [slideToShow, setSlideToShow] = useState(4);
  //const [progress, setProgress] = useState(0);

  /* const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3);
    } else if (window.innerWidth <= 1000) {
      setSlideToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1);
    }
  }; */

  /*  useEffect(() => {
    setSlides();
    //setProgress(100 / articles.length - slideToShow + 1);
    window.addEventListener("resize", () => {
      setSlides();
    });
  }, []); */

  const settings = {
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    /*  afterChange: (current: number) => {
      setProgress(100 / articles.length - (slideToShow + 1)) * (current + 1);
      console.log(slideToShow);
    }, */
  };
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }
  return (
    <div className="relative">
      <Slider {...settings}>
        {products.map((item: any, index: number) => (
          <Link href={`/products/${item.id}`} key={index}>
            <ProductCard product={item} />
          </Link>
        ))}
      </Slider>
      {/* <div className="h-[2px] bg-gray-200 w-[250px] absolute -top-[15px] right-0">
        <div
          className="bg-black absolute h-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div> */}
    </div>
  );
}
