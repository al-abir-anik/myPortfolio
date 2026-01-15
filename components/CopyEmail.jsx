"use client";
import { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaCheck } from "react-icons/fa6";

const defaultTransition = {
  type: "spring",
  stiffness: 160,
  damping: 17,
  mass: 1,
};

const  CopyEmail = ({ value }) => {
  const controls = useAnimation();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 4000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      onMouseEnter={() => controls.start("animate")}
      onMouseLeave={() => controls.start("normal")}
      className="w-60 flex items-center justify-center gap-2 px-6 py-4 rounded-full border-2 border-white bg-white/40 hover:bg-white text-sm font-medium transition-colors ease-in-out duration-200"
    >
      <span>{copied ? "Copied" : value}</span>

      {copied ? (
        <FaCheck className="h-3.5 w-3.5" />
      ) : (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={18}
          height={18}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#27272a"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-4 w-4"
        >
          <motion.rect
            width="14"
            height="14"
            x="8"
            y="8"
            rx="2"
            ry="2"
            variants={{
              normal: { translateX: 0, translateY: 0 },
              animate: { translateX: -3, translateY: -3 },
            }}
            animate={controls}
            transition={defaultTransition}
          />
          <motion.path
            d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            variants={{
              normal: { x: 0, y: 0 },
              animate: { x: 3, y: 3 },
            }}
            animate={controls}
            transition={defaultTransition}
          />
        </svg>
      )}

      <span className="sr-only">Copy</span>
    </button>
  );
};

export default CopyEmail;
