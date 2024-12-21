"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData, experiencesData } from "@/lib/data";

export default function Education() {
  return (
    <div
      id="education"
      className="w-full min-h-full bg-none text-xl tracking-wide text-slate-300 font-light mb-24 p-3"
    >
      {educationData.map((i, index) => (
        // <div key={index} className="bg-slate-800/50 rounded-2xl text-white w-full my-6">
        <motion.div
          key={index}
          className="bg-slate-800/50 text-white rounded-2xl shadow-md w-full my-6 px-2"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="p-12 h-full w-full transition-transform transform hover:scale-105  duration-300 ease-in-out">
            <h2 className="text-xl font-light	 mb-1 tracking-wide">{i.exam}</h2>
            <h1 className="text-teal-400 text-xl font-semibold tracking-wider mb-2">
              {i.institute}
            </h1>
            <div className="text-sm text-slate-400 mb-4 uppercase font-medium tracking-wider">
              {i.year}
            </div>
            <p className="text-gray-300 text-[18px] font-normal">
              {i.description}
            </p>
          </div>
          {/* </div> */}
        </motion.div>
      ))}
    </div>
  );
}
