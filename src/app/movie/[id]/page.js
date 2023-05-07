import Image from "next/image";
import React from "react";

export default async function page({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const data = await res.json();

  return (
    <>
      <div>
        <Image src={data.image} alt="prodects" width={200} height={200} />
        <p>{data.description}</p>
      </div>
    </>
  );
}
