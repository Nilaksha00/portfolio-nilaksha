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

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { toast } from "react-hot-toast";
import Header from "@/components/header";
import About from "@/components/about";
import Experience from "@/components/experience";
import Education from "@/components/education";
import Techstack from "@/components/techstack";
import Projects from "@/components/projects";

// Dynamically load the header component
const Page = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // Ensures this effect only runs once after the component mounts
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Return null to avoid rendering server-side before component is mounted

  return (
    <motion.main
      className="h-full overflow-y-auto scroll-smooth xl:pr-[18%] lg:pr-[18%] md:pr-[4%] sm:pr-[5%] pr-[5%]"
      initial={{ opacity: 0, x: 700 }} // Only animate on the client side
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }} // Optional: Add a smooth transition
    >
      <div className="md:pl-0 pl-8 md:hidden mb-8">
        <Header />
      </div>
      <About />
      <Experience />
      <Education />
      <Techstack />
      <Projects />
    </motion.main>
  );
};

export default Page;
