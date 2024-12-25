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
      <div className="flex items-center w-full mb-8">
        <hr className="flex-grow border-t-1 border-teal-400 mb-1 rounded-full" />

        <h2 className="my-0 ml-4 text-teal-400 font-semibold tracking-widest">
          EDUCATION
        </h2>
      </div>

      {educationData.map((i, index) => (
        <motion.div
          key={index}
          className="bg-slate-800/50 text-white rounded-2xl shadow-md w-full my-6 px-2  hover:text-teal-400 "
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="p-12 h-full w-full transition-transform transform duration-300 ease-in-out">
            <div className="flex items-center justify-between gap-4 flex-nowrap mb-4">
              <div>
                <h2 className="text-xl font-medium m-0 tracking-wide">
                  {i.institute}
                </h2>
                <h1 className="text-slate-500 text-lg font-normal tracking-wide mt-1 leading-tight">
                  {i.exam}
                </h1>
              </div>
              <div className="text-sm text-slate-400 m-0 uppercase font-medium tracking-wider text-nowrap ">
                {i.year}
              </div>
            </div>

            <p
              className="text-gray-300 text-[18px] font-light leading-snug"
              dangerouslySetInnerHTML={{ __html: i.description }}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
