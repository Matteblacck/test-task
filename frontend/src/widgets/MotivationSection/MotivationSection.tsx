import Image from "next/image";
import styles from "./motivationSection.module.scss";

export default function MotivationSection() {
  return (
    <section className={styles.section}>
      <div className={styles.wrapper}>
        {/* LEFT */}
        <div className={styles.left}>
          <h2 className={styles.title}>
            Create and Sell NFTs
          </h2>

          <p className={styles.subtitle}>
            World’s Largest NFT Place
          </p>

          <div className={styles.actions}>
            <button className={styles.primary}>
              Explore More
            </button>

            <button className={styles.secondary}>
              Sell Artwork
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.imageWrapper}>
            <Image
                className="d-sm-none d-block"
              src="/assets/nfts/nft4.png"
              alt="NFT artwork"
              fill
              priority
            />
            <Image
                className="d-sm-block d-none"
              src="/assets/nfts/nft4-2.png"
              alt="NFT artwork"
              fill
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}