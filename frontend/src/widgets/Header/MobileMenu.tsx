import Image from "next/image";
import styles from "./header.module.scss";
import { 
    FaInstagram, 
    FaLinkedinIn, 
    FaFacebookF, 
    FaTwitter 
  } from "react-icons/fa6";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <div className={`${styles.mobileMenu} ${open ? styles.open : ""}`}>
      {/* Header */}
      <div className={styles.mobileHeader}>
        <div className={styles.mobileLogo}>
          <Image
            src="/assets/wave.svg"
            alt="Wave logo"
            width={38}
            height={38}
          />
          <span className={styles.logoText}>DiveSea</span>
        </div>

        <button
          className={styles.close}
          onClick={onClose}
          aria-label="Close menu"
        >
          ✕
        </button>
      </div>

      <div className={styles.divider} />

      {/* Navigation */}
      <nav className={styles.mobileNav}>
        <a href="#">Discover</a>
        <a href="#">Creators</a>
        <a href="#">Sell</a>
        <a href="#">Stats</a>
      </nav>

     {/* Socials */}
      <div className={styles.socials} >
        <a href="#" aria-label="Instagram">
          <FaInstagram size={27}/>
        </a>
        <a href="#" aria-label="LinkedIn">
          <FaLinkedinIn size={28}/>
        </a>
        <a href="#" aria-label="Facebook">
          <FaFacebookF size={28}/>
        </a>
        <a href="#" aria-label="Twitter">
          <FaTwitter size={28}/>
        </a>
      </div>

      {/* Action */}
      <button className={styles.mobileButton}>
        Connect Wallet
      </button>
    </div>
  );
}