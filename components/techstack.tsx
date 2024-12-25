"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData, skillsData } from "@/lib/data";

export default function Techstack() {
  return (
    <div
      id="techstack"
      className="w-full min-h-screen bg-none text-xl tracking-wide text-slate-300 font-light mb-32 p-3"
    >
      <div className="flex items-center w-full mb-8">
        <hr className="flex-grow border-t-1 border-teal-400 mb-1 rounded-full" />

        <h2 className="my-0 ml-4 text-teal-400 font-semibold tracking-widest">
          TECH STACK
        </h2>
      </div>

      {skillsData.map((i, index) => (
        <motion.div
          key={index}
          className="bg-slate-800/50 text-white rounded-2xl shadow-md w-full my-6 p-12"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="text-sm text-slate-400 mb-3 uppercase font-medium tracking-wider">
            {i.name}
          </div>

          {/* 
          here use a color to indicate the proficiency og the language
          */}
          <div className="flex flex-wrap gap-2">
            {i.list.map((j, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-teal-400 bg-opacity-10 text-teal-400 pt-1 px-4 rounded-full text-base  font-medium"
              >
                {j}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
