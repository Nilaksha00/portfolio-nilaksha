"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full min-h-full bg-none text-xl tracking-wide text-slate-300 font-light mb-24 p-3"
    >
      <div className="flex items-center w-full mb-8">
        <hr className="flex-grow border-t-1 border-teal-400 mb-1 rounded-full" />

        <h2 className="my-0 ml-4 text-teal-400 font-semibold tracking-widest">
         WORK EXPERIENCE
        </h2>
      </div>
      
      {experiencesData.map((i, index) => (
        <motion.div
          key={index}
          className="bg-slate-800/50 text-white rounded-2xl shadow-md w-full my-6 px-2"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="p-12 h-full w-full transition-transform transform duration-300 ease-in-out">
            <div className="text-sm text-slate-400 mb-3 uppercase font-medium tracking-wider">
              {i.date}
            </div>
            <h2 className="text-xl font-medium mb-2 tracking-wide text-slate-200">
              {i.title}
              <span className="text-teal-400 mx-2">· {i.company}</span>
            </h2>
            <p className="text-gray-300 my-5 text-[18px] font-base  leading-snug">
              {i.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {i.skills.map((j, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-teal-400 bg-opacity-10 text-teal-400 pt-1 px-3 rounded-full text-sm font-medium"
                >
                  {j}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
