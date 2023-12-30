import Top from "./components/Top";
import Sectionmd from "./components/Sectionmid.js";
import Third from "./components/Third";

export default async function Home() {
  return (
    <div className="mt-4 mx-6 ">
      <Top />
      <Sectionmd />
      <Third />
    </div>
  );
}
