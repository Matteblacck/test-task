"use client";

import styles from "./header.module.scss";
import Image from "next/image";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import Button from "@/shared/components/Button/Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = () => {
      setScrolled(window.scrollY > 30)
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);

  }, [])

  return (
    <>
      <header
        className={`${styles.header} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        <div className="d-md-block d-none">
          <div className={styles.container}>
            {/* Logo + Nav */}
            <nav className={styles.nav}>
              <Image
                src="/assets/wave.svg"
                alt="Wave logo"
                width={53}
                height={53}
                priority
                className={styles.logo}
              />
              <a href="#" className={styles.link}>
                Discover
              </a>
              <a href="#" className={styles.link}>
                Creators
              </a>
              <a href="#" className={styles.link}>
                Sell
              </a>
              <a href="#" className={styles.link}>
                Stats
              </a>
            </nav>

            <button className={styles.button}>Connect Wallet</button>
          </div>
        </div>
        <div className="d-md-none d-block">
          <div className={styles.container}>
            {/* Logo + Nav */}
            <nav className={styles.nav}>
              <Image
                src="/assets/wave.svg"
                alt="Wave logo"
                width={46}
                height={46}
                priority
              />
              <h1 className={styles.logoText}>Dive Sea</h1>
            </nav>
            {/* Burger */}
            <Button
              className={styles.burger}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
            >
              <Image
                src="/assets/burger.svg"
                alt="Wave logo"
                width={40}
                height={40}
                priority
              />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
