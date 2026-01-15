"use client";

import { useEffect, useState } from "react";

export default function ViewCursor({ active }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [target, setTarget] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (!active) return;

    const move = (e) => setTarget({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [active]);

  useEffect(() => {
    if (!active) return;

    let raf;
    const follow = () => {
      setPos((prev) => ({
        x: prev.x + (target.x - prev.x) * 0.12,
        y: prev.y + (target.y - prev.y) * 0.12,
      }));
      raf = requestAnimationFrame(follow);
    };
    follow();
    return () => cancelAnimationFrame(raf);
  }, [active, target]);

  if (!active) return null;

  return (
    <div
      className="p-2 fixed z-50 rounded-full border border-white bg-black/20 backdrop-blur-sm -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      style={{ left: pos.x, top: pos.y }}
    >
      {/* Spin the SVG */}
      <div className="animate-spin-slow">
        <svg width="60" height="60" viewBox="0 0 100 100">
          <defs>
            <path
              id="circlePath"
              d="M 50,50 m -35,0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
            />
          </defs>

          {/* Circular text */}
          <text
            fill="#111"
            fontSize="20"
            letterSpacing="-0.3"
            className="font-medium"
          >
            <textPath href="#circlePath" startOffset="0%">
              • &nbsp;VIEW SITE&nbsp; •&nbsp; VIEW SITE &nbsp;
            </textPath>
          </text>
        </svg>
      </div>
    </div>
  );
}
