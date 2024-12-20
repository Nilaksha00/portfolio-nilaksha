import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full">
      <About />
      <Experience />
      <Education />
    </main>
  );
}
