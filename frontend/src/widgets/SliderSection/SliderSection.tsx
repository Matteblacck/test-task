"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useEffect, useState, useCallback } from "react";
import styles from "./sliderSection.module.scss";
import SliderCard from "./SliderCard";
import { NftItem, nftAPI } from "@/shared/api/nftAPI";


export default function SliderSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
  });

  const [nfts, setNfts] = useState<NftItem[]>([]);

  useEffect(() => {
    nftAPI.getNftList().then((data) => {
      setNfts(data.slice(0, 10));
    });
  }, []);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Weekly – Top NFT</h2>

      <div className={styles.viewport} ref={emblaRef}>
        <div className={styles.container}>
          {nfts.map((item) => (
            <SliderCard key={item.id} name={item.name} />
          ))}
        </div>
      </div>

      <div className={styles.controls}>
        <button
            className={styles.arrowButton}
            onClick={scrollPrev}
            aria-label="Previous"
        >
            ←
        </button>

        <span className={styles.divider} />

        <button
            className={styles.arrowButton}
            onClick={scrollNext}
            aria-label="Next"
        >
            →
        </button>
        </div>
    </section>
  );
}