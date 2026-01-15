"use client";
import { useEffect, useState } from "react";

const Footer = () => {
  const [time, setTime] = useState("");
  const [period, setPeriod] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      const [t, p] = formatted.split(" ");
      setTime(t);
      setPeriod(p);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-md pb-16 sm:pb-0 space-y-3">
      {/* available */}
      <div className="w-fit px-3 py-1.5 flex items-center gap-2 bg-white/50 border border-zinc200 rounded-xl">
        <span className="relative h-2.5 w-2.5 flex items-center justify-center">
          <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-80 animate-ping"></span>
          <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
        </span>

        <span className="text-xs font-medium text-zinc500 tracking-wide capitalize">
          Available for work
        </span>
      </div>

      {/* time zone */}
      <div className="pl-1 flex gap-3">
        <p className="flex items-baseline font-mono text-zinc-700 tabular-nums uppercase">
          <span>{time}</span>
          <span className="ml-1.5 ">{period}</span>
        </p>

        <p className="tracking-wide">( Dhaka, Bangladesh )</p>
      </div>

      {/* thanks */}
      <p className="">
        Thanks for checking out my site. Design and Built by{" "}
        <span className="font-medium text-zinc600 hover:text-blue">
          Al Abir Anik
        </span>{" "}
        using{" "}
        <span className="font-medium text-zinc600 hover:text-blue">
          Next.js
        </span>
        , deployed on{" "}
        <span className="font-medium text-zinc600 hover:text-blue">
          Vercel.
        </span>
      </p>
    </div>
  );
};

export default Footer;
