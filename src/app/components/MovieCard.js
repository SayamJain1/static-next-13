import React from "react";
import styles from "@/app/styles/common.module.css";
import Image from "next/image";
import Link from "next/link";

export default function movieCard({ title, image, id, description }) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.card_image}>
          <Image src={image} alt="prodects" width={200} height={200} />
        </div>
        <div className={styles.card_data}>
          <h2>{title.substring(0, 18)}...</h2>
          <p>{description.substring(0, 30)}</p>

          <Link href={`/movie/${id}`}>
            <button>Read More</button>
          </Link>
        </div>
      </div>
    </>
  );
}
