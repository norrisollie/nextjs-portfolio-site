import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Articles from "@/components/Articles";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title:
    "Johnathon Spectre | Helping companies build better, scalable software",
};

const Home = () => {
  return (
    <div>
      <Hero />
      <Articles />
      <Bio />
      <Contact />
    </div>
  );
};

export default Home;
