"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";

export default function Header() {
  return (
    <motion.div
      className="flex flex-col justify-center space-y-12 h-full"
      initial={{ x: -500, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
    >
      {/* Name and position */}
      <div>
        <div className="m-0 p-0">
          <p className="text-teal-400 xl:text-4xl lg:text-4xl md:text-3xl sm:text-3xl text-3xl font-bold tracking-wide p-0 m-0">
            <span className="text-white">I&apos;m Nilaksha</span> Perera
          </p>
        </div>

        <div className=" text-white xl:text-xl lg:text-xl md:text-base sm:text-sm text-sm font-medium mt-2">
          Experienced Software Engineer
        </div>
        {/* Short intro */}
        <div>
          <div className=" text-white lg:text-base md:text-base sm:text-sm text-sm font-light tracking-wide mt-10">
            I am a dedicated individual who loves to build digital excellence
            with every line of code.
          </div>
        </div>
      </div>

      {/* Links for the content */}
      <div>
        <nav>
          <ul className="flex flex-col gap-3">
            {links.map((link, index) => (
              <li
                key={link.hash}
                className="flex flex-row items-center cursor-pointer w-fit "
              >
                <Link href={link.hash} passHref>
                  <div className="flex flex-row items-center cursor-pointer w-fit">
                    <svg
                      width="30"
                      height="2"
                      viewBox="0 0 30 2"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="transition-all duration-500 ease-linear"
                    >
                      <path d="M0 1.29785L30 1.29785" stroke="#7B7B7B" />
                    </svg>

                    <div
                      className={`text-[10px] ml-4 font-medium tracking-widest uppercase ${"text-neutral-500"}
                    `}
                    >
                      {link.name}
                    </div>
                  </div>
                </Link>
              </li>

              // <div
              //   className="flex flex-row items-center cursor-pointer w-fit"
              //   key={index}
              //   onClick={() => {
              //     // setActiveIndex(index);
              //     // console.log(activeIndex);
              //   }}
              // >
              //   {index ? (
              //     <svg
              //       width="70"
              //       height="2"
              //       viewBox="0 0 70 2"
              //       fill="none"
              //       xmlns="http://www.w3.org/2000/svg"
              //       className="transition-all duration-1000 ease-in-out"
              //     >
              //       <path d="M0 0.797852L70 0.797852" stroke="#25FFCB" />
              //     </svg>
              //   ) : (
              //     <svg
              //       width="30"
              //       height="2"
              //       viewBox="0 0 30 2"
              //       fill="none"
              //       xmlns="http://www.w3.org/2000/svg"
              //       className="transition-all duration-500 ease-linear"
              //     >
              //       <path d="M0 1.29785L30 1.29785" stroke="#7B7B7B" />
              //     </svg>
              //   )}

              //   <div
              //     className={`text-[10px] ml-4 font-medium tracking-widest uppercase ${
              //       index ? "text-teal-400" : "text-neutral-500"
              //     }
              //     `}
              //   >
              //     {item}
              //   </div>
              // </div>
            ))}
          </ul>
        </nav>
      </div>

      {/* CV and Social Links */}
      <div>
        <Link href="/nilaksha_resume.pdf" passHref>
          <div className="w-fit h-fit px-4 py-1.5 bg-teal-400 bg-opacity-10 rounded-[9px] justify-center items-center gap-2 inline-flex hover:scale-95 transition-all duration-500 ease-in-out">
            <div className="text-teal-400 text-[13px] mr-1 tracking-wide ">
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
              width={18}
              height={20}
              alt="GitHub"
              className="cursor-pointer  hover:scale-90 transition-all duration-500 ease-in-out"
            />
          </Link>
          <Link href="https://www.instagram.com/frostine.00/" passHref>
            <Image
              src="/instagram.svg"
              width={18}
              height={20}
              alt="Instagram"
              className="cursor-pointer  hover:scale-90 transition-all duration-500 ease-in-out"
            />
          </Link>
          <Link href="https://medium.com/@nilaksha00" passHref>
            <Image
              src="/medium.svg"
              width={18}
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
