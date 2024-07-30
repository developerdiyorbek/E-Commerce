"use client";

import { useProducts } from "@/Query/queryFn";
import React from "react";

function Home() {
  const products = useProducts();
  console.log(products);

  return <div>Home</div>;
}

export default Home;
