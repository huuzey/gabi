import dynamic from "next/dynamic";

const Top = dynamic(() => import("./components/Top"), { ssr: false });
const Sectionmd = dynamic(() => import("./components/Sectionmid.js"), {
  ssr: false,
});
const Third = dynamic(() => import("./components/Third"), { ssr: false });
export default async function Home() {
  return (
    <div className="mt-4 mx-6 ">
      <Top />
      <Sectionmd />
      <Third />
    </div>
  );
}
