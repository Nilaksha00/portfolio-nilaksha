"use client";

import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      className="w-full min-h-screen bg-none text-xl tracking-wide text-slate-300 font-light px-6 py-12"
      initial={{ opacity: 0, x: 500 }}
      whileInView={{ opacity: 1, x: 0 }}
      // viewport={{ once: false, amount: 0.2 }} // Replay animations and trigger when 20% of the section is visible
      // transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <p>
        I’m a full-stack developer with a strong foundation in building dynamic
        and user-focused web applications. With a year of experience as an
        Associate Software Engineer specializing in React, I have honed my
        skills in creating seamless and responsive interfaces that prioritize
        both design aesthetics and functional excellence.
      </p>
      <div className="my-4" />
      <p>
        Currently, I’m expanding my expertise to back-end development, aiming to
        deliver robust, full-stack solutions. My technical toolkit includes
        proficiency in JavaScript, React, and a growing knowledge of Java and
        .NET, enabling me to bridge the gap between front-end and back-end
        systems effectively.
      </p>
      <div className="my-4" />
      <p>
        I thrive on solving challenging problems, learning new technologies, and
        collaborating with teams to bring innovative ideas to life. Beyond
        coding, I enjoy exploring the synergy between creativity and logic,
        diving into anime, and keeping up with the latest trends in tech and
        design.
      </p>
    </motion.section>
  );
}
