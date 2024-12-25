"use client";

import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Image from "next/image";
import { motion } from "framer-motion";
import Projects from "@/components/projects";
import Techstack from "@/components/techstack";

export default function Home() {
  return (
    <motion.main
      className="h-full overflow-y-auto scroll-smooth h-full  xl:pr-[18%] lg:pr-[18%] md:pr-[12%] sm:pr-[12%] pr-[18%]"
      initial={{ opacity: 0, x: 700 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      // transition={{
      //   // opacity: { duration: 0.5, delay: 0.5 }, // Delay the opacity transition
      //   x: {  delay: 0.5 }, // Delay the x transition
      // }}
    >
      <About />
      <Experience />
      <Education />
      <Techstack />
      <Projects />
    </motion.main>
  );
}
