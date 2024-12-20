"use client";

import React from "react";
import { motion } from "framer-motion";
import { educationData, experiencesData } from "@/lib/data";

export default function Education() {
  return (
    <section
      id="education"
      className="w-full h-full bg-none text-xl tracking-wide text-slate-300 font-light"
    >
      {educationData.map((i, index) => (
        <div key={index} className="text-white p-6 rounded-2xl w-full my-6">
          <div className="text-sm text-slate-400 mb-3 uppercase font-medium tracking-wider">
            {i.year}
          </div>
          <h1 className="text-teal-400 text-2xl font-semibold tracking-wider">{i.institute}</h1>

          <h2 className="text-xl font-medium mb-2 tracking-wide">{i.exam}</h2>
          <p className="text-gray-300 mb-4 text-[18px] font-base">
            {i.description}
          </p>
        </div>
      ))}
    </section>
  );
}
