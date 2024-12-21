"use client";

import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-none text-xl tracking-wide text-slate-300 font-light px-6 py-6 mb-24"
      // Replay animations and trigger when 20% of the section is visible
      // transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="flex items-center w-full mb-8">
        <hr className="flex-grow border-t-1 border-teal-400 mb-1 rounded-full" />

        <h2 className="my-0 ml-4 text-teal-400 font-semibold tracking-widest">
          ABOUT
        </h2>
      </div>

      <div className="w-full flex justify-center">
        <div className="w-[180px] h-[180px] mb-12">
          <Image
            src="/images/front-pic.jpg"
            width={500}
            height={500}
            className="rounded-full"
            alt="Picture of the author"
          />
        </div>
      </div>

      <p>
        I’m a full-stack developer with a strong foundation in building dynamic
        and user-focused web applications. With a year of experience as an
        Associate Software Engineer specializing in React, I have honed my
        skills in creating seamless and responsive interfaces that prioritize
        both design aesthetics and functional excellence.
      </p>
      <div className="my-4" />
      <p>
        Currently, I’m expanding my expertise to back-end development, aiming to
        deliver robust, full-stack solutions. My technical toolkit includes
        proficiency in JavaScript, React, and a growing knowledge of Java and
        .NET, enabling me to bridge the gap between front-end and back-end
        systems effectively.
      </p>
      <div className="my-4" />
      <p>
        I thrive on solving challenging problems, learning new technologies, and
        collaborating with teams to bring innovative ideas to life. Beyond
        coding, I enjoy exploring the synergy between creativity and logic,
        diving into anime, and keeping up with the latest trends in tech and
        design.
      </p>
    </section>
  );
}
