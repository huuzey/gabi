import { dummy } from "@/lib/dummy";
import dynamic from "next/dynamic";
import React from "react";

const Top = dynamic(() => import("./components/Top"), { ssr: false });
const Sectionmd = dynamic(() => import("./components/Sectionmid.js"), {
  ssr: false,
});
const Third = dynamic(() => import("./components/Third"), { ssr: false });
export default async function Home() {
  const response = await dummy();
  return (
    <div className="mt-4 mx-6 ">
      <Top data={response} />
      <Sectionmd data={response} />
      <Third data={response} />
    </div>
  );
}
