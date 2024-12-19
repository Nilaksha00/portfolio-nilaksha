"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Cursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Update cursor position
  useEffect(() => {
    const handleMouseMove = (event: any) => {
      setMousePosition({ x: event.clientX, y: event.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 w-0 h-0 rounded-full pointer-events-none bg-teal-400/30 z-50"
        style={{
          x: mousePosition.x - 50,
          y: mousePosition.y - 50,
          width: "100px",
          height: "100px",
          borderRadius: "100%",
          scale: "4",
          boxShadow: "rgb(96 98 108 / 17%) 0px 0px 25px",
          background:
            "radial-gradient(circle, rgba(127, 129, 161, 0.08) 30%, rgba(12, 15, 24, 0) 140%)",
        }}
        
        animate={{
          scale: [4, 4, 4], // Pulsating animation
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </>
  );
};

export default Cursor;
