"use client";
import { motion, useAnimation } from "framer-motion";

const defaultTransition = {
  type: "spring",
  stiffness: 250,
  damping: 25,
};

export const CodeAndLink = ({ containerClass, sourceCode }) => {
  const codeControls = useAnimation();
  const linkControls = useAnimation();

  return (
    <div
      className={`${containerClass} w-fit mt-3.5 flex-col items-start gap-2 `}
    >
      {/* Code Icon */}
      {sourceCode && (
        <button
          onClick={() => window.open(sourceCode, "_blank")}
          onMouseEnter={() => codeControls.start("animate")}
          onMouseLeave={() => codeControls.start("normal")}
          className="btn-motion px-3 py-2.25 flex items-center gap-1.5 bg-secondary-gradient text-white rounded-xl select-none cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#fff"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5"
          >
            <motion.polyline
              points="8 6 2 12 8 18"
              variants={{
                normal: { translateX: "0%" },
                animate: { translateX: "-2px" },
              }}
              transition={defaultTransition}
              animate={codeControls}
              initial="normal"
            />
            <motion.polyline
              points="16 18 22 12 16 6"
              variants={{
                normal: { translateX: "0%" },
                animate: { translateX: "2px" },
              }}
              transition={defaultTransition}
              animate={codeControls}
              initial="normal"
            />
          </svg>

          <span className="text-xs ">Source code</span>
        </button>
      )}

      {/* Link Icon */}
      {/* <div
        onMouseEnter={() => linkControls.start("animate")}
        onMouseLeave={() => linkControls.start("normal")}
        className="px-3 py-2 flex items-center gap-1.5 bg-secondary-gradient text-white rounded-2xl select-none cursor-pointer"
      >
        <span className="pl-1 text-sm">Live link</span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={16}
          height={16}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth={2}
          className="w-5 -rotate-45"
        >
          <motion.path
            d="M9 17H7A5 5 0 0 1 7 7h2"
            variants={{
              normal: { x: 0 },
              animate: { x: -2 },
            }}
            transition={defaultTransition}
            animate={linkControls}
            initial="normal"
          />
          <motion.path
            d="M15 7h2a5 5 0 1 1 0 10h-2"
            variants={{
              normal: { x: 0 },
              animate: { x: 2 },
            }}
            transition={defaultTransition}
            animate={linkControls}
            initial="normal"
          />
          <line x1="8" x2="16" y1="12" y2="12" />
        </svg>
      </div> */}
    </div>
  );
};
