"use client";

import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.main
      className="h-full overflow-y-auto scroll-smooth h-full"
      initial={{ opacity: 0, x: 500 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
    >
      <About />
      <Experience />
      <Education />
    </motion.main>
  );
}
