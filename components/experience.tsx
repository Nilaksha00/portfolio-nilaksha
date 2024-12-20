"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-full h-full bg-none text-xl tracking-wide text-slate-300 font-light"
    >
      {experiencesData.map((i, index) => (
        <div
          key={index}
          className="bg-slate-800/50 text-white p-12 rounded-2xl shadow-md w-full my-6"
        >
          <div className="text-sm text-slate-400 mb-3 uppercase font-medium tracking-wider">{i.date}</div>
          <h2 className="text-xl font-medium mb-2 tracking-wide">
            {i.title}
            <span className="text-teal-400 mx-2 ">· {i.company}</span>
          </h2>
          <p className="text-gray-300 mb-4 text-[18px] font-base">{i.description}</p>
          <div className="flex flex-wrap gap-2">
            {i.skills.map((j, skillIndex) => (
              <span
                key={skillIndex}
                className="bg-teal-400 bg-opacity-10 text-teal-400 pt-1 px-3 rounded-full text-sm"
              >
                {j}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
