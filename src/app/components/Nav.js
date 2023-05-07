import Link from "next/link";
import React from "react";
import styles from "@/app/styles/navbar.module.css";

export default function Nav() {
  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navbarList}>
          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/">
              Home
            </Link>
          </li>

          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/movie">
              products
            </Link>
          </li>

          <li className={styles.navbarItem}>
            <Link className={styles.navbarLink} href="/contact">
              contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
