"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

const Top = dynamic(() => import("./components/Top"), { ssr: false });
const Sectionmd = dynamic(() => import("./components/Sectionmid.js"), {
  ssr: false,
});
const Third = dynamic(() => import("./components/Third"), { ssr: false });
export default function Home() {
  const [dummy, setDummy] = useState("");
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=10")
      .then((res) => res.json())
      .then((data) => {
        setDummy(data.products);
      });
  }, []);
  console.log("dummy", dummy);
  return (
    <div className="mt-4 mx-6 ">
      <Top data={dummy} />
      <Sectionmd data={dummy} />
      <Third data={dummy} />
    </div>
  );
}
