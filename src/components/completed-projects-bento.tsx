import React, { useState } from "react";
import Image from "next/image";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { ArrowRight } from "lucide-react";

const villas = [
  {
    key: "emirates-hills-1",
    name: "Luxury Villa, Emirates Hills",
    type: "G+1 Villa",
    location: "Emirates Hills, Dubai",
    description: "A luxurious G+1 villa in Emirates Hills, Dubai, featuring modern architecture, spacious interiors, and premium amenities.",
    images: [
      "/images/completed/emirates/J05/1.webp",
      "/images/completed/emirates/J05/2.webp",
      "/images/completed/emirates/J05/3.webp",
      "/images/completed/emirates/J05/4.webp",
    ],
  },
  {
    key: "umm-suqeim",
    name: "Umm Suqeim, Dubai",
    type: "B+G+1 Villa",
    location: "Umm Suqeim, Dubai",
    description: "A B+G+1 villa in Umm Suqeim, Dubai, offering elegant design, multiple living spaces, and a serene environment.",
    images: [
      "/images/completed/Umm Suqeim/1.webp",
      "/images/completed/Umm Suqeim/2.webp",
    ],
  },
  {
    key: "emirates-hills-2",
    name: "Emirates Hills, Dubai",
    type: "G+1 Villa",
    location: "Emirates Hills, Dubai",
    description: "A G+1 villa in Emirates Hills with contemporary styling, lush landscaping, and high-end finishes throughout.",
    images: [
      "/images/completed/emirates/E73/1.webp",
      "/images/completed/emirates/E73/2.webp",
    ],
  },
  {
    key: "emirates-hills-3",
    name: "Emirates Hills, Dubai",
    type: "B+G+1 Villa",
    location: "Emirates Hills, Dubai",
    description: "A B+G+1 villa in Emirates Hills, designed for luxury living with expansive rooms and beautiful outdoor spaces.",
    images: [
      "/images/completed/emirates/E78/1.webp",
      "/images/completed/emirates/E78/2.webp",
    ],
  },
  {
    key: "emirates-hills-4",
    name: "Emirates Hills, Dubai",
    type: "G+1 Villa",
    location: "Emirates Hills, Dubai",
    description: "A G+1 villa in Emirates Hills, featuring open-plan living, modern amenities, and a tranquil setting.",
    images: [
      "/images/completed/emirates/P40/1.webp",
      "/images/completed/emirates/P40/2.webp",
      "/images/completed/emirates/P40/3.webp",
      "/images/completed/emirates/P40/4.webp",
      "/images/completed/emirates/P40/5.webp",
      "/images/completed/emirates/P40/6.webp",
      "/images/completed/emirates/P40/7.webp",
      "/images/completed/emirates/P40/8.webp",
      "/images/completed/emirates/P40/9.webp",
      "/images/completed/emirates/P40/10.webp",
      "/images/completed/emirates/P40/11.webp",
    ],
  },
  {
    key: "polo-homes",
    name: "Polo Homes, Dubai",
    type: "B+G+1 Villa",
    location: "Polo Homes, Dubai",
    description: "A B+G+1 villa in Polo Homes, Dubai, blending classic elegance with modern comforts in a prestigious community.",
    images: [
      "/images/completed/polo homes/1.webp",
      "/images/completed/polo homes/2.webp",
      "/images/completed/polo homes/3.webp",
      "/images/completed/polo homes/4.webp",
    ],
  },
  {
    key: "emirates-hills-5",
    name: "Emirates Hills, Dubai",
    type: "B+G+1 Villa",
    location: "Emirates Hills, Dubai",
    description: "A B+G+1 villa in Emirates Hills, offering spacious living, premium finishes, and a private garden oasis.",
    images: [
      "/images/completed/emirates/R46/1.webp",
      "/images/completed/emirates/R46/2.webp",
      "/images/completed/emirates/R46/4.webp",
      "/images/completed/emirates/R46/5.webp",
      "/images/completed/emirates/R46/6.webp",
      "/images/completed/emirates/R46/7.webp",
      "/images/completed/emirates/R46/8.webp",
      "/images/completed/emirates/R46/9.webp",
    ],
  },
  {
    key: "emirates-hills-6",
    name: "Emirates Hills, Dubai",
    type: "G+1 Villa",
    location: "Emirates Hills, Dubai",
    description: "A G+1 villa in Emirates Hills, designed for comfort and style, with beautiful interiors and outdoor living areas.",
    images: [
      "/images/completed/emirates/W17/1.webp",
      "/images/completed/emirates/W17/2.webp",
      "/images/completed/emirates/W17/3.webp",
    ],
  },
];

function HoverImageSlider({ images, alt }: { images: string[]; alt: string }) {
  const [hovered, setHovered] = useState(false);
  const [index, setIndex] = useState(0);

  React.useEffect(() => {
    if (!hovered || images.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 1200);
    return () => clearInterval(interval);
  }, [hovered, images.length]);

  React.useEffect(() => {
    if (!hovered) setIndex(0);
  }, [hovered]);

  return (
    <div
      className="relative w-full h-64 sm:h-80 md:h-[28rem] flex items-center justify-center overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-900"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ aspectRatio: '4/3', maxWidth: '100%' }}
    >
      <Image
        src={images[index]}
        alt={alt}
        fill
        className="object-cover object-center transition-all duration-500 rounded-xl scale-105"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 900px"
        priority={index === 0}
      />
      {/* Hover hint overlay if multiple images */}
      {images.length > 1 && !hovered && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-black/60 text-white text-xs rounded-full flex items-center gap-2 shadow-lg z-20 animate-fade-in">
          <ArrowRight className="w-4 h-4 mr-1" />
          Hover to slide images
        </div>
      )}
    </div>
  );
}

export default function CompletedProjectsBento() {
  return (
    <BentoGrid className="gap-8">
      {villas.map((villa) => (
        <BentoGridItem
          key={villa.key}
          title={null}
          description={
            <div className="flex flex-col lg:flex-row items-stretch w-full gap-6">
              {/* Left: Image */}
              <div className="lg:w-1/2 w-full flex items-center justify-center">
                <HoverImageSlider images={villa.images} alt={villa.name} />
              </div>
              {/* Right: Details */}
              <div className="lg:w-1/2 w-full flex flex-col justify-center px-4 sm:px-6 lg:px-12 mt-6 lg:mt-0">
                <div className="relative flex items-start group animate-fade-in">
                  {/* Accent bar */}
                  <div className="w-1 h-full rounded-full bg-gradient-to-b from-primary to-blue-400 mr-6" />
                  {/* Glass card */}
                  <div className="flex-1 rounded-2xl bg-white/70 dark:bg-black/40 backdrop-blur-md shadow-lg p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="inline-block px-3 py-1 text-xs font-bold rounded-full bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300 mr-2">Completed</span>
                      <span className="inline-flex items-center gap-1 text-primary font-semibold text-sm">
                        <ArrowRight className="w-4 h-4" />
                        {villa.type}
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 dark:text-white mb-1">{villa.name}</h3>
                    {villa.name !== villa.location && (
                      <div className="text-sm sm:text-base text-blue-700 dark:text-blue-300 font-medium mb-2">{villa.location}</div>
                    )}
                    <div className="border-t border-gray-200 dark:border-gray-700 my-3" />
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-0">{villa.description}</p>
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