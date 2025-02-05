"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import { toast } from "react-hot-toast";

export default function Header() {
  const [activeIndex, setActiveIndex] = useState(1);

  const text1 = "Nilaksha";
  const text2 = "Perera";

  const letters1 = text1.split("");
  const letters2 = text2.split("");

  const typingVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.28,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, x: 10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0 } },
  };

  useEffect(() => {
    // const handleScrollHighlight = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const visibleSection = links.find(
              (link) => link.hash === `#${entry.target.id}`
            );
            if (visibleSection) {
              setActiveIndex(visibleSection?.id);
              console.log("Section highlighted:", visibleSection.id); // Debug log
            }
          }
        });
      },
      {
        threshold: 0.1, // Change threshold to be more sensitive
      }
    );

    setTimeout(() => {
      links.forEach((link) => {
        const section = document.getElementById(link.hash.substring(1));
        if (section) {
          observer.observe(section);
        }
      });
    }, 100);

    return () => {
      observer.disconnect();
    };
    // };

    // handleScrollHighlight();
  }, [links]);

  useEffect(() => {
    console.log(activeIndex);
  }, [activeIndex]);

  const handleScroll = (hash: string, id: number) => {
    setActiveIndex(id);

    const section = document.getElementById(hash.substring(1));
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const handleCopyEmail = () => {
    const email = "nilaksha.sandani@gmail.com";
    console.log(email);
    navigator.clipboard.writeText(email).then(() => {
      toast("Email address copied to clipboard!", {
        duration: 2000,
        position: "bottom-center",
      });
    });
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
          <p className="text-teal-400 xl:text-6xl lg:text-6xl md:text-5xl sm:text-5xl text-5xl font-bold tracking-wide p-0 m-0">
            <motion.span
              className="mr-4"
              variants={typingVariants}
              initial="hidden"
              animate="visible"
            >
              {letters1.map((letter, index) => (
                <motion.span key={index} variants={letterVariants}>
                  {letter}
                </motion.span>
              ))}
              <span className="mx-2"></span>
              {letters2.map((letter, index) => (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-slate-100"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>
          </p>
        </div>

        <div className="text-slate-600 xl:text-xl lg:text-xl md:text-base sm:text-sm text-sm font-medium tracking-wider">
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
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* CV and Social Links */}
      <div>
        <Link href="/nilaksha_resume.pdf" passHref target="_blank">
          <div className="w-fit h-fit px-5 py-1.5 bg-teal-400 bg-opacity-10 rounded-[9px] justify-center items-center gap-2 inline-flex hover:scale-95 transition-all duration-500 ease-in-out">
            <div className="text-teal-400 text-normal mr-1 mt-[2px] tracking-wider ">
              See my resume
            </div>

            <Image src="/arrow.svg" width={20} height={11.3} alt="Arrow" />
          </div>
        </Link>
        <div className="flex flex-row justify-start items-center gap-4 mt-8">
          <motion.div
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            onClick={() => handleCopyEmail()}
            className="cursor-pointer"
          >
            <Image
              src="/email.svg"
              width={21}
              height={20}
              alt="Email"
              className="mx-1"
            />
          </motion.div>

          <Link
            href="https://www.linkedin.com/in/nilaksha00/"
            passHref
            target="_blank"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/linkedin.svg"
                width={18}
                height={20}
                alt="LinkedIn"
                className="cursor-pointer mx-1"
              />
            </motion.div>
          </Link>
          <Link href="https://github.com/nilaksha00/" passHref target="_blank">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/github.svg"
                width={20}
                height={22}
                alt="GitHub"
                className="cursor-pointer mx-1"
              />
            </motion.div>
          </Link>
          <Link
            href="https://www.instagram.com/frostine.00/"
            passHref
            target="_blank"
          >
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/instagram.svg"
                width={20}
                height={20}
                alt="Instagram"
                className="cursor-pointer mx-1"
              />
            </motion.div>
          </Link>
          <Link href="https://medium.com/@nilaksha00" passHref target="_blank">
            <motion.div
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="/medium.svg"
                width={20}
                height={20}
                alt="Medium"
                className="cursor-pointer mx-1"
              />
            </motion.div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
