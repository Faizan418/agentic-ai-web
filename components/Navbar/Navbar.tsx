'use client'
import { useState } from "react";
import styles from "./Navbar.module.css";
import { LuBot } from "react-icons/lu";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black">
      <nav className={styles.navbar}>

        <div className={styles.title_div}>
          <span className={styles.title_icon}>
          <LuBot />
          </span>
          <span className={styles.title_head}>Agentia World</span>
        </div>


        <div className={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX /> : <FiMenu />}
        </div>

 
        <div className={`${styles.manu_div} ${menuOpen ? styles.menu_open : ""}`}>
          <ul className={styles.menu_ul}>
            <li className={styles.menu_li}>Features</li>
            <li className={styles.menu_li}>Technology</li>
            <li className={styles.menu_li}>Agents</li>
            <li className={styles.menu_li}>Pricing</li>
            <li className={styles.menu_li}>Contact</li>
          </ul>
          <button
            type="button"
            className={styles.launch_button}
          >
            Launch Console
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
