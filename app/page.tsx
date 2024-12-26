// "use client";

// import About from "@/components/about";
// import Education from "@/components/education";
// import Experience from "@/components/experience";
// import Image from "next/image";
// import { motion } from "framer-motion";
// import Projects from "@/components/projects";
// import Techstack from "@/components/techstack";
// import Header from "@/components/header";

// export default function Home() {
//   return (
//     <motion.main
//       className="h-full overflow-y-auto scroll-smooth h-full  xl:pr-[18%] lg:pr-[18%] md:pr-[4%] sm:pr-[5%] pr-[5%]"
//       initial={{ opacity: 0, x: 700 }}
//       whileInView={{ opacity: 1, x: 0 }}
//       // viewport={{ once: true }}
//       // transition={{
//       //   // opacity: { duration: 0.5, delay: 0.5 }, // Delay the opacity transition
//       //   x: {  delay: 0.5 }, // Delay the x transition
//       // }}
//     >
//       <div className="md:pl-0 pl-8 md:hidden mb-8">
//         <Header />
//       </div>
//       <About />
//       <Experience />
//       <Education />
//       <Techstack />
//       <Projects />
//     </motion.main>
//   );
// }

"use client";

// page.tsx
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Projects from "@/components/projects";
import Techstack from "@/components/techstack";
import Header from "@/components/header";

// Dynamically load Framer Motion's motion.main without SSR
const MotionMain = dynamic(
  () => import("framer-motion").then((mod) => mod.motion.main),
  { ssr: false }
);

const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <MotionMain
      className="h-full overflow-y-auto scroll-smooth xl:pr-[18%] lg:pr-[18%] md:pr-[4%] sm:pr-[5%] pr-[5%]"
      initial={!isClient ? {} : { opacity: 0, x: 700 }}
      animate={!isClient ? {} : { opacity: 1, x: 0 }}
    >
      <div className="md:pl-0 pl-8 md:hidden mb-8">
        <Header />
      </div>
      <About />
      <Experience />
      <Education />
      <Techstack />
      <Projects />
    </MotionMain>
  );
};

export default Page;
