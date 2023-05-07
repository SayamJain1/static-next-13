import React from "react";
import MovieCard from "@/app/components/movieCard";
import styles from "@/app/styles/common.module.css";

export default async function Products() {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();

  return (
    <>
      <section className={styles.movieSection}>
        <div>
          <h1>Products</h1>
          <div className={styles.card_section}>
            {data.map((item) => {
              return <MovieCard key={item.title} {...item} />;
            })}
          </div>
        </div>
      </section>
    </>
  );
}
