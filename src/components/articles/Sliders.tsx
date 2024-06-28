"use client";
import Card from "@/components/articles/Card";
import NextArrow from "@/components/articles/NextArrow";
import PrevArrow from "@/components/articles/PrevArrow";
import { articles } from "@/data";
import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Sliders() {
  const [slideToShow, setSlideToShow] = useState(4);
  const [progress, setProgress] = useState(0);

  const setSlides = () => {
    if (window.innerWidth <= 1280 && window.innerWidth > 1000) {
      setSlideToShow(3);
    } else if (window.innerWidth <= 1000) {
      setSlideToShow(2);
    } else if (window.innerWidth <= 650) {
      setSlideToShow(1);
    }
  };

  useEffect(() => {
    setSlides();
    setProgress(100 / articles.length - slideToShow + 1);
    window.addEventListener("resize", () => {
      setSlides();
    });
  }, []);

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
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
        },
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
        },
      },
      ,
    ],
    afterChange: (current: number) => {
      setProgress(100 / articles.length - slideToShow + 1) * (current + 1);
      console.log(slideToShow);
    },
  };

  return (
    <div className="relative">
      <Slider {...settings}>
        {articles.map((item, index) => (
          <Card
            key={index}
            img={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </Slider>
      <div className="h-[2px] bg-gray-200 w-[250px] absolute -top-[15px] right-0">
        <div
          className="bg-black absolute h-full transition-all"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    </div>
  );
}
