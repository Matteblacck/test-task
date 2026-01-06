import { useEffect, useState } from "react";
import styles from "./sliderSection.module.scss";
import Image from "next/image";

type Props = {
  name: string;
};

function getRandomBid() {
  return (Math.random() * (3 - 0.5) + 0.5).toFixed(2);
}
const NFT_IMAGES = [
    "/assets/nfts/nft1.png",
    "/assets/nfts/nft2.png",
    "/assets/nfts/nft3.png",
  ];
  function getRandomImage() {
    return NFT_IMAGES[Math.floor(Math.random() * NFT_IMAGES.length)];
  }  

export default function SliderCard({ name }: Props) {
  const [bid] = useState(getRandomBid);
  const [image] = useState(getRandomImage);
  const [timeLeft, setTimeLeft] = useState(7 * 60 * 60 + 9 * 60 + 12); // 07h 09m 12s

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((t) => (t > 0 ? t - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className={styles.card}>
      <div className={styles.imagePlaceholder}>
  <Image
    src={image}
    alt={name}
    fill
    className={styles.image}
    sizes="210px"
  />

  <span className={styles.timer}>
    {hours}h {minutes}m {seconds}s
  </span>
</div>

      <div className={styles.cardBody}>
        <h3 className={styles.name}>{name}</h3>

        <div className={styles.bid}>
          <div className={styles.currentBid}>
            <span>Current bid</span>
            <div>
              <Image src="/assets/eth.svg" alt="ETH" width={10} height={10} />{" "}
              <p>{bid}</p>
            </div>
          </div>

          <div>
            <button className={styles.button}>PLACE BID</button>
          </div>
        </div>
      </div>
    </div>
  );
}
