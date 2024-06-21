"use client";
import bannerBG1 from "@/app/assets/image/banner-bg-01.webp";
import bannerBG2 from "@/app/assets/image/banner-bg-02.webp";
import bannerBG3 from "@/app/assets/image/banner-bg-03.webp";
import { useEffect, useState } from "react";
import HeroTitle from "./sub-components/HeroTitle";

export default function Hero() {
  const [background, setBackground] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const bgArray = [bannerBG1.src, bannerBG2.src, bannerBG3.src];
  let timeOut: any = null;

  useEffect(changeBackground);

  function counter(num: number) {
    let count = num;
    if (num === 2) {
      count = 0;
      setBackground(count);
    } else {
      count += 1;
      setBackground(count);
    }
    console.log(background);
  }
  function changeBackground() {
    timeOut = autoplay && setTimeout(() => counter(background), 5000);
  }
  return (
    <section
      className="hero-section"
      onClick={() => {
        setAutoplay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => setAutoplay(true)}
      style={{ backgroundImage: `url(${bgArray[background]})` }}
    >
      <div className="box">
        <HeroTitle />
      </div>
    </section>
  );
}
