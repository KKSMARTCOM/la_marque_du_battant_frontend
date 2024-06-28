import About from "@/components/About";
import Banner from "@/components/Banner";
import NewArticles from "@/components/NewArticles";
import Events from "@/components/Events";
import Collections from "@/components/Collections";

export default function Home() {
  return (
    <div>
      <Banner />
      <NewArticles />
      <About />
      <Collections />
      <Events />
    </div>
  );
}
