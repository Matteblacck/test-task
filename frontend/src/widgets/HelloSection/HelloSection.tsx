"use client";
import Button from "@/shared/components/Button/Button";
import styles from "./helloSection.module.scss";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    x: 80,
  },
  visible: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: custom,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const arrowVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.8,
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const textContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.25,
    },
  },
};

const textItem: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};
export default function HelloSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT */}
        <motion.div
          className={styles.left}
          variants={textContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div className={styles.text} variants={textItem}>
            <motion.h1 className={styles.title} variants={textItem}>
              Discover And <br /> Create NFTs
            </motion.h1>

            <motion.p className={styles.description} variants={textItem}>
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a{" "}
              <span style={{ color: "black", fontWeight: 600 }}>
                $20 bonus.
              </span>
            </motion.p>
          </motion.div>

          <motion.div className={styles.actions} variants={textItem}>
            <Button className={styles.primary}>Explore More</Button>
            <Button className={styles.secondary}>Create NFT</Button>
          </motion.div>

          <motion.div className={styles.stats} variants={textItem}>
            <div className={styles.stat}>
              <span className={styles.value}>430K+</span>
              <span className={styles.label}>Art Works</span>
            </div>

            <div className={styles.stat}>
              <span className={styles.value}>159K+</span>
              <span className={styles.label}>Creators</span>
            </div>

            <div className={styles.stat}>
              <span className={styles.value}>87K+</span>
              <span className={styles.label}>Collections</span>
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT */}
        <div className={styles.right}>
          <div className={styles.scene}>
            <div className={styles.dots}>
              <Image src="/assets/dots.svg" alt="" fill />
            </div>

            {/* MAIN CARD */}
            <motion.div
              className={styles.mainCard}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={0.2}
            >
              <Image src="/assets/rectangle3.png" alt="" fill />
            </motion.div>

            {/* SECONDARY CARD */}
            <motion.div
              className={styles.secondaryCard}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={0.35}
            >
              <Image src="/assets/sun2.png" alt="" fill />
            </motion.div>

            {/* ARROW */}
            <motion.div
              className={styles.arrow}
              variants={arrowVariants}
              initial="hidden"
              animate="visible"
            >
              <Image src="/assets/arrow.svg" alt="" width={120} height={80} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
