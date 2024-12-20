"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleScroll = (hash: string, id: number) => {
    setActiveIndex(id);

    const section = document.getElementById(hash.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });

      setTimeout(() => {
        window.history.replaceState(null, "", hash); // Update the URL
      }, 500);
    }
  };

  return (
    <motion.div
      className="flex flex-col justify-center space-y-12 h-fit w-full"
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      {/* Name and position */}
      <div>
        <div className="m-0 p-0">
          <p className="text-teal-400 xl:text-6xl lg:text-6xl md:text-5xl sm:text-4xl text-4xl font-bold tracking-normal p-0 m-0">
            <span className="text-slate-100 mr-1">Nilaksha</span> Perera
          </p>
        </div>

        <div className="text-slate-600 xl:text-xl lg:text-xl md:text-base sm:text-sm text-sm font-medium tracking-wider mt-1">
          ASSOCIATE SOFTWARE ENGINEER
        </div>
      </div>

      {/* Links for the content */}
      <div>
        <nav>
          <ul className="flex flex-col gap-4">
            {links.map((link) => (
              <li
                key={link.hash}
                className="flex flex-row items-center cursor-pointer w-fit"
              >
                <Link href={link.hash} passHref>
                  <div
                    className="flex flex-row items-center cursor-pointer w-fit group"
                    onClick={() => {
                      handleScroll(link.hash, link.id);
                    }}
                  >
                    {link?.id == activeIndex ? (
                      <svg
                        width="70"
                        height="2"
                        viewBox="0 0 70 2"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="transition-all duration-1000 ease-in-out mt-[-4px]"
                      >
                        <path d="M0 0.797852L70 0.797852" stroke="#25FFCB" />
                      </svg>
                    ) : (
                      <svg
                        width="30"
                        height="2"
                        viewBox="0 0 30 2"
                        fill="none"
                        className="transition-all duration-500 ease-linear mt-[-4px]"
                        style={{ transformOrigin: "left center" }}
                      >
                        <path d="M0 1.29785L30 1.29785" stroke="#94a3b8" />
                      </svg>
                    )}

                    <div
                      className={`text-[13px] ml-7 font-medium tracking-widest uppercase ${
                        link?.id == activeIndex
                          ? "text-teal-400"
                          : "text-slate-400 group-hover:text-teal-400"
                      }`}
                    >
                      {link.name}
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* CV and Social Links */}
      <div>
        <Link href="/nilaksha_resume.pdf" passHref>
          <div className="w-fit h-fit px-5 py-1.5 bg-teal-400 bg-opacity-10 rounded-[9px] justify-center items-center gap-2 inline-flex hover:scale-95 transition-all duration-500 ease-in-out">
            <div className="text-teal-400 text-normal mr-1 mt-[2px] tracking-wider ">
              See my resume
            </div>

            <Image src="/arrow.svg" width={20} height={11.3} alt="Arrow" />
          </div>
        </Link>
        <div className="flex flex-row justify-start items-center gap-6 mt-6">
          <Link href="https://www.linkedin.com/in/nilaksha00/" passHref>
            <Image
              src="/linkedin.svg"
              width={18}
              height={20}
              alt="LinkedIn"
              className="cursor-pointer hover:scale-90 transition-all duration-500 ease-in-out"
            />
          </Link>
          <Link href="https://github.com/nilaksha00/" passHref>
            <Image
              src="/github.svg"
              width={20}
              height={22}
              alt="GitHub"
              className="cursor-pointer  hover:scale-90 transition-all duration-500 ease-in-out"
            />
          </Link>
          <Link href="https://www.instagram.com/frostine.00/" passHref>
            <Image
              src="/instagram.svg"
              width={20}
              height={20}
              alt="Instagram"
              className="cursor-pointer  hover:scale-90 transition-all duration-500 ease-in-out"
            />
          </Link>
          <Link href="https://medium.com/@nilaksha00" passHref>
            <Image
              src="/medium.svg"
              width={20}
              height={20}
              alt="Medium"
              className="cursor-pointer hover:scale-90 transition-all duration-500 ease-in-out"
            />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
