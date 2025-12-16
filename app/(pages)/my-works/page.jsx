"use client";
import WorkCard from "@/components/cards/ProjectCard";
import GetInTouch from "@/components/GetInTouch";
import StartAProject from "@/components/StartAProject";
import { useEffect, useState } from "react";

const MyWorks = () => {
  const [allWorks, setAllWorks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/allWorks");
        const data = await res.json();
        setAllWorks(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <section className="w-full px-[15px] sm:px-[30px] pt-[176px] pb-[30px]">
        <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-16">
          <h2 className="w-fit h-fit font-medium text-5xl sm:text-[64px]">
            Selected Works
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {loading
              ? // Skeleton loader for work cards
                Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-[400px] bg-zinc300 rounded-3xl animate-pulse"
                  />
                ))
              : allWorks.map((w, index) => <WorkCard key={index} work={w} />)}
          </div>
        </div>
      </section>

      <StartAProject />
      <GetInTouch />
    </>
  );
};

export default MyWorks;
