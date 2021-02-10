import React from "react";
import NextLink from "next/link";
import styles from "../../styles/Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.container}>
      <img
        style={{ marginLeft: "2rem" }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Logo_NIKE.svg/150px-Logo_NIKE.svg.png"
      />
      <div className={styles.navbar}>
        <ul className={styles.navbar}>
          <li className={styles.navbarLink}>
            <NextLink href="/">Home</NextLink>
          </li>
          <li className={styles.navbarLink}>
            <NextLink href="/products">Products</NextLink>
          </li>
          <li className={styles.navbarLink}>
            <NextLink href="/">Contact</NextLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
