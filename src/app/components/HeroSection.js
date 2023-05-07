import React from "react";
import heroStyles from "@/app/styles/HeroSection.module.css";
import styles from "@/app/styles/common.module.css";
import Link from "next/link";
import { Poppins } from "next/font/google";
import Image from "next/image";

export default function HeroSection({title, image}) {
  return (
    <main className={heroStyles.main_section}>
      <div className={styles.container}>
        <div className={styles.grid_two_section}>
          <div className={heroStyles.hero_content}>
            <h1>{title}</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad odit
              iusto deleniti aperiam! Doloremque, quisquam asperiores a quae
              reiciendis sed rerum earum ad neque odit minus consequuntur nisi
              tempora itaque, laborum exercitationem nam vero? Corrupti numquam
              quisquam ea illum reiciendis!
            </p>
            <Link href="/movie">
              <button >Explore</button>
            </Link>
          </div>
          <div className={heroStyles.hero_image}>
            <Image src={image} alt="hero image" width={200} height={200} />
          </div>
        </div>
      </div>
    </main>
  );
}
