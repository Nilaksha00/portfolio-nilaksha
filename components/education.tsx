"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
      id="education"
      className="w-full h-full bg-none text-xl tracking-wide text-slate-300 font-light	"
      // initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }} // Replay animations and trigger when 20% of the section is visible
      transition={{ duration: 0.75, ease: "easeInOut" }}
    >
      dkf/lsfjdsklfdlkgjd
    </motion.section>
  );
}
