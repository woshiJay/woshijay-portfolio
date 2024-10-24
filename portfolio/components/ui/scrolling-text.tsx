"use client";

import { motion } from "framer-motion";
import React from "react";

const ScrollingText: React.FC = () => {
  const text = `All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved_▞▚▞▚▞▚▞_Made_By_woshiJay_▞▚▞▚▞▚▞_©_2024_▞▚▞▚▞▚▞_Next.JS_Vercel_▞▚▞▚▞▚▞_All Rights Reserved`;

  return (
    <div className="relative overflow-hidden whitespace-nowrap bg-gray py-4">
      {/* Infinite scrolling container */}
      <motion.div
        className="flex space-x-4"
        animate={{ x: ["-100%", "100%"] }} // Start offscreen and move to the left
        transition={{ repeat: Infinity, duration: 60, ease: "linear" }} // Infinite loop
      >
        {[...Array(10)].map((_, i) => (
          <span key={i} className="text-gray-400 text-xs uppercase">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default ScrollingText;