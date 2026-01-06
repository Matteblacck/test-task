import Image from "next/image";
import styles from "./footerSection.module.scss";
import {
  FaInstagram,
  FaLinkedinIn,
  FaFacebookF,
  FaTwitter,
} from "react-icons/fa6";

export default function FooterSection() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* TOP */}
        <div className={styles.top}>
          {/* Logo */}
          <div className={styles.logo}>
            <div className="d-flex align-items-center gap-2">
            <Image
              src="/assets/waveWhite.svg"
              alt="DiveSea logo"
              width={40}
              height={40}
              style={{color:'white'}}
            />
            <span>DiveSea</span>
            </div>
            
            <div  className={styles.socials2}>
                <a href="#" aria-label="Instagram">
                <FaInstagram size={18}/>
                </a>
                <a href="#" aria-label="LinkedIn">
                <FaLinkedinIn size={18} />
                </a>
                <a href="#" aria-label="Facebook">
                <FaFacebookF size={15}/>
                </a>
                <a href="#" aria-label="Twitter">
                <FaTwitter size={18}/>
                </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className={styles.nav}>
            <a href="#">Privacy Policy</a>
            <a href="#">Term & Conditions</a>
            <a href="#">About Us</a>
            <a href="#">Contact</a>
          </nav>
        </div>

        <div className={styles.divider} />

        {/* BOTTOM */}
        <div className={styles.bottom}>
            <div className="d-sm-none d-block" >
            <span className={styles.copy}>© 2023 DiveSea All Rights Reserved.</span>
            </div>
            <div className="d-none d-sm-flex justify-content-center">
            <span className={styles.copy}>© 2023</span>
            </div>
          

          <div className={styles.socials}>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}