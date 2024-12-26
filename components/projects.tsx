"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiencesData, projectsData } from "@/lib/data";
import Image from "next/image";

export default function Projects() {
  return (
    <div
      id="projects"
      className="w-full min-h-screen bg-none text-xl tracking-wide text-slate-300 font-light mb-32 p-6 md:p-3"
    >
      <div className="flex items-center w-full mb-8">
        <hr className="flex-grow border-t-1 border-teal-400 mb-1 rounded-full" />

        <h2 className="my-0 ml-4 text-teal-400 font-semibold tracking-widest">
          PROJECTS
        </h2>
      </div>

      {projectsData.map((i, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="bg-slate-800/50 text-white p-4 md:p-12 rounded-2xl shadow-md w-full my-6 flex flex-row gap-6"
        >
          {/* <div className="text-sm text-slate-400 mb-3 uppercase font-medium tracking-wider">{i.date}</div> */}
          {/* <div className="w-[240px]">
            <Image
              src="/images/front-pic.jpg"
              width={500}
              height={500}
              // className="rounded-full"
              alt="Picture of the author"
            />
          </div> */}

          <div className="h-fit">
            <h2 className="text-teal-400 font-normal ">{i.name}</h2>
            <h2 className="text-xl font-medium mb-2 tracking-wide">
              {i.title}
            </h2>

            <p className="text-gray-300 mb-4 text-[18px] font-base">
              {i.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {i.tags.map((j, skillIndex) => (
                <span
                  key={skillIndex}
                  className="bg-teal-400 bg-opacity-10 text-teal-400 pt-1 px-3 rounded-full text-sm  font-medium"
                >
                  {j}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
