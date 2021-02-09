import React from "react";
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      
      <img style={{marginLeft: "2rem"}}src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/150px-Logo_NIKE.svg.png" />
      <div className={styles.navbar}>

        <ul className={styles.navbar}>
          
          <li className={styles.navbarLink}>
            <Link href="/">Home</Link>
          </li>
          <li className={styles.navbarLink}>
            <Link href="/products">Products</Link>
          </li>
          <li className={styles.navbarLink}>
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
