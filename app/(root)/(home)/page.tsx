"use client";

import { useProducts } from "@/Query/queryFn";
import React from "react";

function Home() {
  const products = useProducts();
  console.log(products);

  return <section className="container mx-auto max-w-7xl">Home</section>;
}

export default Home;
