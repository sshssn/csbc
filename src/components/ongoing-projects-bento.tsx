import React from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowRight } from "lucide-react";

const ongoingProjects = [
  {
    key: "dh1",
    name: "Dubai Hills 1",
    image: "/images/1.jpg",
  },
  {
    key: "dh2",
    name: "Dubai Hills 2",
    image: "/images/4.jpg",
  },
  {
    key: "dh3",
    name: "Dubai Hills 3",
    image: "/images/3.jpg",
  },
  {
    key: "eh1",
    name: "Emirates Hill 1",
    image: "/images/2.jpg",
  },
  {
    key: "eh2",
    name: "Emirates Hill 2",
    image: "/images/1.jpg",
  },
];

export default function OngoingProjectsBento() {
  return (
    <BentoGrid className="gap-8">
      {ongoingProjects.map((project) => (
        <BentoGridItem
          key={project.key}
          title={null}
          description={
            <div className="flex flex-col lg:flex-row items-stretch w-full gap-6">
              {/* Left: Image */}
              <div className="lg:w-1/2 w-full flex items-center justify-center">
                <div className="relative w-full h-64 sm:h-80 md:h-[28rem] overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900" style={{ aspectRatio: '4/3', maxWidth: '100%' }}>
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-center rounded-xl scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
                    priority
                  />
                </div>
              </div>
              {/* Right: Name and UI */}
              <div className="lg:w-1/2 w-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 mt-6 lg:mt-0">
                <div className="relative flex items-start group animate-fade-in">
                  {/* Accent bar */}
                  <div className="w-1 h-full rounded-full bg-gradient-to-b from-primary to-blue-400 mr-6" />
                  {/* Glass card */}
                  <div className="flex-1 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur-md shadow-lg p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mr-2">Ongoing</span>
                      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                        <ArrowRight className="w-4 h-4" />
                        Villa Project
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-1">{project.name}</h3>
                  </div>
                </div>
              </div>
            </div>
          }
          header={null}
          className="col-span-1 w-full"
        />
      ))}
    </BentoGrid>
  );
} 